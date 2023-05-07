/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          alert("Delete successful");
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
              <button onClick={() => handleDelete(user._id)}>X</button>
            </p>
          ))}
      </div>
    </>
  );
};

export default Users;
