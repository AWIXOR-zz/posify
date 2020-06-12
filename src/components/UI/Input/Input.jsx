import React from "react";
import styled from "styled-components";

import { TextField } from "@material-ui/core";
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const Input = ({ field, ...props }) => {
  return (
    <InputWrapper>
      <TextField {...field} {...props} />
    </InputWrapper>
  );
};

export default Input;
