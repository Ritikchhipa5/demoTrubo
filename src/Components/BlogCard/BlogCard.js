import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function BlogCard(props) {
  return (
    <BlogCardContainer to={props.data.link}>
      <BlogCardWrapper>
        <BlogCardImage src={props.data.img} />
        <BlogCardContent>
          <BlogContentDate>{props.data.Date}</BlogContentDate>
          <BlogHeading>{props.data.heading}</BlogHeading>
          <BlogText>{props.data.text}</BlogText>
        </BlogCardContent>
        <BlogAuthorContainer>
          <AuthorImgContainer>
            <AuthorImg src={"/assets/demo.png"} />
          </AuthorImgContainer>
          <AuthorName>Ritik Chhipa</AuthorName>
        </BlogAuthorContainer>
      </BlogCardWrapper>
    </BlogCardContainer>
  );
}
const BlogCardContainer = styled(Link)`
  background-size: cover;
  flex: 1 1 301px;
  flex-direction: column;
  margin: 0 0 40px;
  min-height: 220px;
  overflow: hidden;
  padding: 0 20px 40px;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1), 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;
const BlogCardWrapper = styled.div`
  color: #262728;
  display: flex;
  flex-direction: column;
`;
const BlogCardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  background: grey no-repeat center center;
  height: 200px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  margin-top: 15px;
`;
const BlogCardContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  text-align: left;
`;
const BlogContentDate = styled.div`
  margin: 12px 0;
  color: #90a2aa;
  font-size: 12px;
`;
const BlogHeading = styled.div`
  font-size: 20px;
  line-height: 1.15em;
  margin: 0 0 0.4em;
  transition: color 0.2s ease-in-out;
  font-family: "Inter-Bold", Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #3d3d4e;
  margin-bottom: 12px;
  &:hover {
    color: rgba(112, 71, 234, 0.78);
  }
`;
const BlogText = styled.div`
  margin: 0;
  display: -webkit-box;
  font-size: 14px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 20px;
  overflow: hidden;
  color: #5b6987;
`;

const BlogAuthorContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  margin-left: 10px;
`;
const AuthorImgContainer = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
const AuthorImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const AuthorName = styled.div`
  color: #434952;
  margin-left: 12px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.2px;
  line-height: 1.4em;
`;
// const BlogCardContainer = styled.div``;
