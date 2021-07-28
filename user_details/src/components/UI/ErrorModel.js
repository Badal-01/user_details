import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.errorHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={props.errorHandler}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModel;
