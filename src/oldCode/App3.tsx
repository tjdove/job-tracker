import React, { useEffect, useState } from "react";

// Create a user object
// const user = {
//   id: 1,
//   first_name: 'John',
//   last_name: 'Doe',
//   address: '123 Main St',
//   state: 'California',
//   zip: '12345',
// };
// Define an interface for the user object
interface User {
  id: number;
  first_name: string;
  last_name: string;
  addr1: string;
  addr2: string;
  state: string;
  zip: string;
}

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from your API here (e.g., using Axios, Fetch, etc.)
    // Replace this with your actual API call
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>
              {user.first_name} {user.last_name}
            </strong>
            <p>Address: {user.addr1}</p>
            <p>State: {user.state}</p>
            <p>Zip: {user.zip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
