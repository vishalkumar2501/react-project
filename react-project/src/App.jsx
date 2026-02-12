import './App.css';
import EventToDo from './components/EventToDo';

function App() {
  return (
    <>
      <EventToDo name="Vishal kumar" />
      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted');
      }}>
        <input type="text" placeholder="Enter something" />
        <button type="submit">Submit</button>

      </form>
      <ul id ="taskList">
        <li>
            <input type="checkbox" id="task1" name="task1" value="Task 1" />
            <label for="task1"> Task 1</label>
        </li>
        <li>
            <input type="checkbox" id="task2" name="task2" value="Task 2" />
            <label for="task2"> Task 2</label>

        </li>
 

          
      </ul>

    </>
  );
}

export default App;
