import React from "react";
import styled from "styled-components";

import { TextField } from "@material-ui/core";
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const StyledInput = styled.div`
  padding-bottom: 1.2rem;
`;

const Error = styled.div`
  color: #ff5757;
  visibility: ${({ show }) => (show ? "visibile" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 2rem;
  font-size: 1rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput>
        <TextField {...field} {...props} />
      </StyledInput>

      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
