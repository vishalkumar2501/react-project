import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));

  }, []);

  return (
    <div>
      <h1>API Call Example</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          
    
        </div>
      ))}

    </div>
  )
}

export default App