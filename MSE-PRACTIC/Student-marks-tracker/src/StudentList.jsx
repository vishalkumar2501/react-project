

const StudentList = ({students ,deleteStudent}) => {
  return (
    <div>
     {students.map((s) => (

          <li key={s.id}>

            {s.name} : {s.marks}

            <button onClick={() => deleteStudent(s.id)}>
              Delete
            </button>

          </li>

        ))}

    </div>
  )
}

export default StudentList