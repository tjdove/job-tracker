import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./types";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch the array of user objects
    axios
      .get<User[]>("./api/users")
      .then((response) => {
        const fetchedUsers: User[] = response.data;
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
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
            <p>Address: {user.addr2}</p>
            <p>State: {user.state}</p>
            <p>Zip: {user.zip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
