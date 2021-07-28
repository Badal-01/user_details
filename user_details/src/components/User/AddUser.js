import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const Adduser = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      mobile.trim().length === 0 ||
      email.trim().length === 0 ||
      age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "May be some input field is Empty",
      });
      return;
    }
    if (Number(age) < 1) {
      setError({
        title: "Invalid age",
        message: "May be your age is invalid",
      });
      return;
    }
    props.addingInUserList(name, mobile, email, age);
    setName("");
    setMobile("");
    setEmail("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={handleName} value={name} />

          <label htmlFor="mobile">Mobile No:</label>
          <input
            id="mobile"
            type="text"
            onChange={handleMobile}
            value={mobile}
          />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" onChange={handleEmail} value={email} />

          <label htmlFor="age">Age:</label>
          <input id="age" type="number" onChange={handleAge} value={age} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default Adduser;
