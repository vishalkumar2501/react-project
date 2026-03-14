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

//-------------------------MSE 1 QUESTION -------------------------------------------

import React, { useState } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [error, setError] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();

    // Check if name is empty or only whitespace
    if (studentName.trim() === '') {
      setError('Student name cannot be empty.');
      return;
    }

    // Check if student name already exists (case-insensitive)
    const nameExists = students.some(
      (student) => student.name.toLowerCase() === studentName.trim().toLowerCase()
    );

    if (nameExists) {
      setError('Student with this name already exists.');
      return;
    }

    // Add new student with unique ID and Absent status
    const newStudent = {
      id: Date.now(),
      name: studentName.trim(),
      attendance: 'Absent'
    };

    setStudents([...students, newStudent]);
    setStudentName('');
    setError('');
  };

  const handleDeleteStudent = (id) => {
    // Remove student from list by filtering out the student with matching id
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const toggleAttendance = (id) => {
    // Toggle attendance status between Present and Absent
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          attendance: student.attendance === 'Present' ? 'Absent' : 'Present'
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Attendance Tracker</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <ul className="list-group">
        {students.map((student) => (
          <li
            key={student.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{student.name}</span>
            <span className="badge bg-primary">{student.attendance}</span>
            <div>
              <button
                className="btn btn-sm btn-info me-2"
                onClick={() => toggleAttendance(student.id)}
              >
                {student.attendance === 'Present' ? 'Mark Absent' : 'Mark Present'}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDeleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;