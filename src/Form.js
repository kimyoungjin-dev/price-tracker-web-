import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  height: 40px;
  justify-content: center;
  display: flex;
`;

const Input = styled.input`
  all: unset;
  background: #7f00ff;
  background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
  background: linear-gradient(to right, #e100ff, #7f00ff);
  height: 100%;
  width: 300px;
  border-radius: 3px;
  color: white;
  &::placeholder {
    color: white;
    padding-left: 10px;
  }
`;

const Form = ({ value, setValue }) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Form;
