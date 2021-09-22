import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginState } from "../Actions/action";
export default function LoginPage(props) {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Flag, setFlag] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  //Submit Login Form
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = { email, password };
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "success") {
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch(setLoginState());
          history.push("/");
        } else if (data.msg === "notFound") {
          setFlag(data.msg);
          console.log(data.msg);
        } else if (data.msg === "passwordWrong") {
          setFlag(data.msg);
          console.log(data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginHeaderWrapper>
            <LoginHeader>Login</LoginHeader>
            <LoginSubHeader to="/register">Create New Account?</LoginSubHeader>
          </LoginHeaderWrapper>
          <LoginFieldSet key="1">
            <LoginLable>Email*</LoginLable>
            <LoginInput
              type="text"
              placeholder={"Email"}
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value.trim());
              }}
              style={{
                border: Flag === "notFound" ? "1px solid red" : null,
              }}
            />
          </LoginFieldSet>
          <LoginFieldSet key="2">
            <LoginLable>Password*</LoginLable>
            <LoginInput
              style={{
                border: Flag === "passwordWrong" ? "1px solid red" : null,
              }}
              type="password"
              placeholder={"Password"}
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value.trim());
              }}
            />
          </LoginFieldSet>
          <LoginButton onClick={handleSubmit}>Login in</LoginButton>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  height: 1000px;
  background: rgb(255, 81, 140);
  background: linear-gradient(
    153deg,
    rgba(255, 81, 140, 1) 0%,
    rgba(255, 218, 218, 1) 57%,
    rgba(255, 197, 126, 1) 100%
  );
`;
const LoginWrapper = styled.div`
  margin: 0 auto;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
`;
const LoginHeaderWrapper = styled.div`
  text-align: center;
`;
const LoginHeader = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const LoginSubHeader = styled(Link)`
  font-size: 10px;
  cursor: pointer;
  color: #4896ff;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    opacity: 0.5;
  }
`;
const LoginFieldSet = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;
const LoginLable = styled.label`
  font-size: var(-req-font-size-12);
  margin: 10px 0;
  font-weight: bold;
`;
const LoginInput = styled.input`
  outline: none;
  margin: 0 2px 2px 2px;
  transition: 0.3s linear 0s;
  padding: 12px;
  border: 1px solid #eaeaec;
  border-radius: 5px;
  background-color: #f8f8f8;
  &:focus {
    margin: 0 2px 2px;
    border: 1px solid transparent;
    background-color: white;
    border-color: var(--req-primary-color);
    border: 0 0 0 4px rgb(234 76 137 / 10%);
  }
`;
const LoginButton = styled.div`
  margin-top: 12px;
  padding: 12px;
  color: white;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  background-color: var(--req-primary-color);
  &:hover {
    background-color: rgba(113, 72, 235, 0.8);
  }
`;
