import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ error, success }) => {
    if (error) return "#ff5757";
    if (success) return "green";
    else return "#003459";
  }};
  opacity: ${({ show }) => (show ? "1" : "0")};
  text-align: center;
  transition: all 0.2s;
`;

const Message = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success} show={show}>
      {children}
    </P>
  );
};

export default Message;
