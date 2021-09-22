import React from "react";
import styled from "styled-components";
function Button({ children, ...props }) {
  return (
    <>
      <StyleButton {...props}>{children}</StyleButton>
    </>
  );
}
const StyleButton = styled.div`
  height: 20px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: var(--req-primary-color);
  color: var(--req-white-color);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: white;
    color: var(--req-primary-color);
    border: 0.5px solid var(--req-primary-color);
  }
`;
export default Button;
