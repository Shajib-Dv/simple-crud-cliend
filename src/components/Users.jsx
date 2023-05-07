/** @format */

import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  //   console.log(users);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete successful");
          const remainingUser = users.filter((user) => user._id !== _id);
          setUsers(remainingUser);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Total user : {users.length}</h2>
        {users &&
          users.map((user) => (
            <p key={user._id}>
              {" "}
              Name: {user.name} Email: {user.email}{" "}
              <Link to={`/update/${user._id}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => handleDelete(user._id)}>X</button>
            </p>
          ))}
      </div>
    </>
  );
};

export default Users;
