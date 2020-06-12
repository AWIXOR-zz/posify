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
  /* padding-bottom: 1.2rem; */
`;

const Input = ({ field, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput>
        <TextField {...field} {...props} />
      </StyledInput>
    </InputWrapper>
  );
};

export default Input;
