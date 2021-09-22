import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import NestedDropdown from "./NestedDropdown";
export default function Dropdown(props) {
  const [Hidden, setHidden] = useState(false);
  console.log(props.data.key);
  function toggleHidden() {
    setHidden(!Hidden);
  }

  return (
    <>
      <NavDropDownItem onMouseEnter={toggleHidden} onMouseLeave={toggleHidden}>
        <NavDropDownLink>
          <NavDropDownItemText>{props.data.key}</NavDropDownItemText>
          <BsArrowRightShort size={20} className="nav-dropdownitem-arrow" />
          {Hidden ? (
            <NavDropDownRightContainer>
              {props.data.modules.map((d) => (
                <NestedDropdown module={d} />
              ))}
              <BsArrowRightShort size={20} />
            </NavDropDownRightContainer>
          ) : (
            ""
          )}
        </NavDropDownLink>
      </NavDropDownItem>
    </>
  );
}
const NavDropDownItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavDropDownLink = styled.div`
  margin: 3px;
  padding: 12px;
  display: flex;
  color: black;
  border-radius: 5px;
  justify-content: space-between;
  background-color: white;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(113, 72, 235, 0.59);
    color: white;
  }
`;
const NavDropDownItemText = styled.div``;
const NavDropDownRightContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 150px;
  padding: 12px;
  border-radius: 12px;
  flex-direction: column;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
  z-index: 1;
  width: 230px;
`;
