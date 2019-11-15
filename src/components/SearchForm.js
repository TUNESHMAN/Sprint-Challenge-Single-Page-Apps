import React, { useState } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const Forms = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Lead = styled.h1`
color: red;
text-align: center;
font-weight: bold;
font-size: 30px`

const Detail = styled.h3`
margin-bottom: 20px;`

const Enter = styled.button`
margin-top: 20px;
width: 70px;
height: 40px;
`

function SearchForm() {
  const [character, setCharacter] = React.useState({
    character_name: "",
    character_id: "",
    character_gender: "",
    character_specie: ""
  });

  return (
    <section className="search-form">
      <Lead>CHARACTER SEARCH FORM</Lead>
      <Forms>
        <ErrorMessage
          name="character_name"
          render={msg => <div className="error">{msg}</div>}
        />
        <Detail>CHARACTER NAME</Detail>
        <Field
          type="text"
          name="character_name"
          placeholder="ENTER CHARACTER NAME"
        />
        <ErrorMessage
          name="character_id"
          render={msg => <div className="error">{msg}</div>}
        />
        <Detail>ID</Detail>
        <Field
          type="text"
          name="character_id"
          placeholder="ENTER CHARACTER ID"
        />
        <Detail>
          Select a gender : <Field as="select" name="character_gender">
            <option>Select an option</option>
            <option>Male</option>
            <option>Female</option>
          </Field>
        </Detail>

        <ErrorMessage
          name="character_specie"
          render={msg => <div className="error">{msg}</div>}
        />
        <Detail>ID</Detail>
        <Field
          type="text"
          name="character_specie"
          placeholder="ENTER CHARACTER SPECIE"
        />

        <Enter type="submit"> SUBMIT</Enter>
      </Forms>
    </section>
  );
}
const testSearchForm = withFormik({
  mapPropsToValues() {
    return {
      character_name: "",
      character_id: "",
      character_gender: "",
      character_specie: ""
    };
  },
  validationSchema: Yup.object().shape({
    character_name: Yup.string().required("Please enter a valid name"),
    character_id: Yup.number().required("Please enter a password"),
    character_gender: Yup.string()
      .oneOf(["Male", "Female"])
      .required("Please select a gender")
  }),

  handleSubmit(values, tools) {
    // console.log(args);
    // These are the props we get when we submit our form
    // values: the values we get back from the form
    // tools: some helpful methods we can use to interact with the form
    console.log(values, tools);

    axios
      .post("https://rickandmortyapi.com/api/character/", values)
      .then(response => {
        console.log(response.data.results);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(SearchForm);

export default testSearchForm;
