import React from "react";
import styled from "styled-components";
import PostItem from "../PostItem/PostItem";
export default function PostList({ posts }) {
  return (
    <>
      <PostListWrapper>
        {posts.map((data) => (
          <PostItem key={data.id} post={data} />
        ))}
      </PostListWrapper>
    </>
  );
}

const PostListWrapper = styled.div`
  padding: 15px 0;
`;
