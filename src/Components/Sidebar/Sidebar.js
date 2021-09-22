import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <SidebarLinks
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          background: "none",
        }}
      >
        <Button
          style={{
            padding: "12px 20px",
            background: "none",
            border: "1px solid var(-req-lightgreen-color)",
            color: "var(-req-lightgreen-color)",
          }}
        >
          Login
        </Button>
        <Button style={{ padding: "12px" }}>Sign Up</Button>
      </SidebarLinks>
      <SidebarLinks to="/">
        <SideBarLink>Home</SideBarLink>
      </SidebarLinks>
      <SidebarLinks to="/checkout">
        <SideBarLink>Service</SideBarLink>
      </SidebarLinks>
      <SidebarLinks>
        <SideBarLink>Sample</SideBarLink>
      </SidebarLinks>
      <SidebarLinks to="/blog">
        <SideBarLink>Blog</SideBarLink>
      </SidebarLinks>
      <SidebarLinks to="/about">
        <SideBarLink>About</SideBarLink>
      </SidebarLinks>
    </>
  );
}

const SidebarLinks = styled(Link)`
  color: #fff;
  padding: 15px;
  background-color: #7047ea;
  margin: 5px 18px;
  border-radius: 5px;
  &:hover {
    background-color: #7047eaa1;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
    transition: 0.2s ease-in;
  }
`;
const SideBarLink = styled.div``;
