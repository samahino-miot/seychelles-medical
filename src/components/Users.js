import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let allUsers = [];
      let page = 1;

      while (true) {
        const response = await fetch(
          `https://reqres.in/api/users?page=${page}`
        );
        const data = await response.json();

        allUsers = allUsers.concat(data.data);

        if (data.total_pages === page || !data.data.length) {
          break;
        }

        page++;
      }

      setUsers(allUsers);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
