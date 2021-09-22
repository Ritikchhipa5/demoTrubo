import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
export default function RegisterPage() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Store all vale ads Object
    let value = { email, password, firstname, lastname };

    //call to API
    // await
    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Have") {
          //When user is already have
          localStorage.setItem("User-Info", JSON.stringify(data));
          history.push("/login");
        } else if (data.msg === "Created") {
          //When user is created
          localStorage.setItem("User-Info", JSON.stringify(data));
          history.push("/login");
        } else {
          console.log(data.msg);
        }
      });
  };
  return (
    <>
      <RegisterContainer>
        <RegisterWrapper>
          <RegisterHeaderWrapper>
            <RegisterHeader>Register</RegisterHeader>
            <RegisterSubHeader to="/login">
              Already have account?
            </RegisterSubHeader>
          </RegisterHeaderWrapper>
          <RegisterForm>
            <RegisterFieldSet>
              <RegisterLable>Email</RegisterLable>
              <RegisterInput
                placeholder={"Email"}
                onChange={(e) => {
                  e.preventDefault();
                  setUsername(e.target.value.trim());
                }}
              />
            </RegisterFieldSet>
            <RegisterFieldSetRow>
              <RegisterFieldSet>
                <RegisterLable>First Name </RegisterLable>
                <RegisterInput
                  placeholder={"First Name"}
                  onChange={(e) => {
                    e.preventDefault();
                    setFirstname(e.target.value.trim());
                  }}
                />
              </RegisterFieldSet>
              <RegisterFieldSet>
                <RegisterLable>Last Name </RegisterLable>
                <RegisterInput
                  placeholder={"Last Name"}
                  onChange={(e) => {
                    e.preventDefault();
                    setLastname(e.target.value.trim());
                  }}
                />
              </RegisterFieldSet>
            </RegisterFieldSetRow>
            <RegisterFieldSet>
              <RegisterLable>Password</RegisterLable>
              <RegisterInput
                placeholder={"Password"}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value.trim());
                }}
              />
            </RegisterFieldSet>
            <RegisterButton onClick={handleSubmit}>Sign up</RegisterButton>
          </RegisterForm>
        </RegisterWrapper>
      </RegisterContainer>
    </>
  );
}

const RegisterContainer = styled.div`
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
const RegisterWrapper = styled.div`
  margin: 0 auto;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
`;
const RegisterHeaderWrapper = styled.div`
  text-align: center;
`;
const RegisterHeader = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const RegisterSubHeader = styled(Link)`
  font-size: 10px;

  cursor: pointer;
  color: #4896ff;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    opacity: 0.5;
  }
`;
const RegisterForm = styled.form`
  padding: 10px;
`;
const RegisterFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;
const RegisterFieldSetRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  justify-content: space-between;
`;
const RegisterLable = styled.label`
  font-size: var(-req-font-size-12);
  margin: 10px 0;
  font-weight: bold;
`;
const RegisterInput = styled.input`
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
const RegisterButton = styled.div`
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
