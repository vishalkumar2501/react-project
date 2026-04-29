const initialState = {
    todo:[]     
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                todo: [...state.todo, action.payload]
            }
        default:
            return state;
    }
}

export default reducer