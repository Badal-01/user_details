import React from "react";
import Card from "../UI/Card";
import classes from "./Userlist.module.css";

const Userlist = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.allList.map((user, index) => {
          return (
            <li key={index}>
              <h3>Name: {user.name}</h3>
              <h3>Mobile: {user.mobile}</h3>
              <h3>Email: {user.email}</h3>
              <h3>Age: {user.age}</h3>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default Userlist;
