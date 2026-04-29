const initialState = {
    todo:[]     
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todo: [...state.todo, action.payload]
            }
        case 'DELETE_TODO':
            return {
                todo: state.todo.filter((_, index) => index !== action.payload)
            }
        case 'TOGGLE':
            return {
                todo: state.todo.map((todo, index) => 
                    index === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            }
        default:
            return state;
    }
}

export default reducer