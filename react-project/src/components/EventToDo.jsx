export default function EventToDo({ name }) {
  return (
    <div>
      <h1>Event To Do</h1>
      <button onClick={() => alert(`Hello ${name}`)}>
        Click Me
      </button>
    </div>
  );
}
