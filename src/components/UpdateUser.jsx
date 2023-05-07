/** @format */

import React from "react";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const loadedUsers = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${loadedUsers?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User updated !");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <h1>Update {loadedUsers?.name}'s info</h1>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" defaultValue={loadedUsers?.name} />{" "}
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedUsers?.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </>
  );
};

export default UpdateUser;
