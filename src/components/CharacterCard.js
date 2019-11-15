import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";

const Buttons = styled.button`
width: 200px;
height: 40px;
background-color: teal;
border-radius: 10px;
outline: none;`

const Outer = styled.div`
margin-bottom: 100px;`

export default function CharacterCard(props) {
  const [picture, setPicture] = React.useState(true);
  return (
    <Outer>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>
          <h3>ID: {props.id}</h3>
          <p>Gender: {props.gender}</p>
          <p>Status: {props.status}</p>
          {picture ? <img src={props.image} /> : null}
          <h3>{props.species}</h3>
          </CardText>
          <Buttons onClick={() => setPicture(!picture)}>
          {picture ? "HIDE IMAGE" : "SHOW IMAGE"}
        </Buttons>
        </CardBody>
      </Card>
    </Outer>
  );
}
