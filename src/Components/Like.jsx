import React, { Component } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

const LikeButton = () => {
  const [value, setValue] = React.useState("Like");
  const onClick = () => {
    localStorage.setItem("myValueInLocalStorage", "Liked");
    setValue("Liked");
    localStorage.getItem("Liked");
  };
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};
export default LikeButton;
