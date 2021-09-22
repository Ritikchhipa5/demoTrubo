import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <Wrapper>
        <ErrorWrapper>
          <ErrorContent>
            <ErrorCode>Error 404</ErrorCode>
            <ErrorTitle>Page Not Found</ErrorTitle>
            <ErrorButton to="/">Go Back Home</ErrorButton>
          </ErrorContent>
        </ErrorWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  background-size: auto, 50%;
  background-position: 0px 0px, 50% 50%;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.94),
      hsla(0, 0%, 100%, 0.94)
    ),
    url("https://assets.website-files.com/5fdcfd5af662c1a52a84e31c/603e293a3d1e6975e6b1c26f_topographic-tile-10.svg");
`;

const ErrorWrapper = styled.div`
  display: flex;
  padding: 2em 0;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/circle.svg");
  background-size: auto;
`;
const ErrorContent = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ErrorCode = styled.div`
  color: #4e67eb;
  text-transform: uppercase;
  margin-bottom: 0.625em;
  font-weight: 700;
  font-size: 0.8em;
  letter-spacing: 0.125em;
  font-family: "Oswald", sans-serif;
`;
const ErrorTitle = styled.div`
  line-height: 1.25;
  margin-top: 0px;
  margin-bottom: 0.26em;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 4.768em;
  font-family: "Oswald", sans-serif;
  @media screen and (min-width: 1280px) {
    font-size: 5.96em;
  }
  @media screen and (max-width: 767px) {
    font-size: 3.815em;
  }
  @media screen and (max-width: 479px) {
    margin-bottom: 0.4em;
    font-size: 3.052em;
  }
`;

const ErrorButton = styled(Link)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: white;
  height: 3em;
  min-height: 3em;
  min-width: 9em;
  margin-bottom: 0px;
  margin-left: 0px;
  padding: 1em 2em;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  background-color: #4e67eb;
  transition: background-color 200ms ease;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  text-decoration: none;
`;
