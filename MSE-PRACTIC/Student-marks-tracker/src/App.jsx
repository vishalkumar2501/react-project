import { useState } from "react";
import StudentList from "./StudentList";

const App = () => {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);

  const averageMarks =
    students.length === 0 ? 0 : (totalMarks / students.length).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || marks === "") return;

    const newStudent = {
      id: students.length + 1,
      name: name,
      marks: Number(marks)
    };

    setStudents([...students, newStudent]);

    setName("");
    setMarks("");
  };

  const deleteStudent = (id) => {

    const updated = students.filter((s) => s.id !== id);

    setStudents(updated);
  };


  return (
    <div>

      <h1>Student Marks Tracker</h1>

      <h3>Total Marks : {totalMarks}</h3>
      <h3>Average Marks : {averageMarks}</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) =>
             setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter marks"
          value={marks}
          onChange={(e) =>
             setMarks(e.target.value)}
        />

        <button>Add Student</button>

      </form>

      <ul>

       <StudentList students={students} deleteStudent={deleteStudent}/>
      </ul>

    </div>
  );
};

export default App;