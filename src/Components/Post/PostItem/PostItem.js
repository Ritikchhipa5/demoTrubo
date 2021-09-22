import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { linkResolver } from "../../../prismic-config";
import MetaTags from "react-meta-tags";
export default function PostItem({ post }) {
  return (
    <>
      <MetaTags>
        <title>Blog</title>
        <meta property={`image: ${post.id}`} href={post.data.image.url}></meta>
        <meta
          property={`title: ${post.id}`}
          content={post.data.title[0].text}
        ></meta>
        <meta
          property={`image-url:${post.id}`}
          href={post.data.image.url}
        ></meta>
      </MetaTags>
      <PostItemContainer>
        <PostItemWrapper>
          <PostImage src={post.data.image.url} alt={"post_img"} />
          <PostItemContent>
            <PostLink to={linkResolver(post)}>
              <PostHeading>{post.data.title[0].text}</PostHeading>
            </PostLink>
            <PostDate>
              Posted <span>{post.data.public_date}</span>
            </PostDate>
          </PostItemContent>
        </PostItemWrapper>
      </PostItemContainer>
    </>
  );
}
const PostItemContainer = styled(Link)`
  background-color: black;
  font-family: "Lato", sans-serif;
`;
const PostItemWrapper = styled.div`
  /* background-color: lightcoral; */
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: rgb(91, 105, 135);
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PostHeading = styled.h1`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.25px;
  font-family: "Lato", sans-serif;
`;
const PostLink = styled(Link)`
  text-decoration: none;
  h1 {
    font-weight: 700;
    color: #031b4e;
  }
  :hover {
    color: blue;
  }
`;
const PostDate = styled.p`
  font-size: 12px;
  display: inline-block;
  -webkit-box-align: center;
  align-items: center;
  color: rgba(51, 51, 51, 0.75);

  span {
    color: #a181ff;
    transition: cubic-bezier(1, 0, 0, 1) 0.3s ease;
  }
  :hover span {
    color: black;
  }
`;
const PostImage = styled.img`
  width: 206px;
  height: 116px;
  border-radius: 3px;
  background-color: lightblue;
  object-fit: cover;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1.3s;
  :hover {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
`;

const PostItemContent = styled.div`
  padding-left: 30px;
`;
