import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function PostTagSidebar(params) {
  return (
    <>
      <PostTagContainer>
        <PostTagWrapper>
          <Topic>Tags</Topic>
          <ListWrapper>
            {data.map((d, key) => (
              <div key={key}>
                <ListItem>{d.topic}</ListItem>
              </div>
            ))}
          </ListWrapper>
        </PostTagWrapper>
      </PostTagContainer>
    </>
  );
}
const PostTagContainer = styled.div`
  background-color: white;
  margin: 0 20px;
`;
const PostTagWrapper = styled.div`
  min-width: 238px;
`;
const Topic = styled.div`
  padding: 12px 22px;
  color: black;
  text-transform: uppercase;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    cursor: pointer;
    padding: 12px 22px;
    transition: ease 0.2s;
    :hover {
      a {
        color: #7047ea;
      }
      border-radius: 40px;
      background: #7047ea26;
    }
  }
`;
const ListItem = styled(Link)`
  color: #3d3d4e;
`;

const data = [
  { topic: "All" },
  {
    topic: "Cloud Computing",
  },
  {
    topic: "Cloud Technologies",
  },
  {
    topic: "Programming",
  },
  {
    topic: "Computer",
  },
  {
    topic: "Technologies",
  },
  {
    topic: "Design",
  },
  {
    topic: "Security",
  },
];
