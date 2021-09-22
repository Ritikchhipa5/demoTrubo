import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-config";
import Loader from "../Components/Loader/Loader";
import PostList from "../Components/Post/PostList/PostList";
import PostTagSidebar from "../Components/Post/PostTagSidebar/PostTagSidebar";
//Blog Function
export default function Blog() {
  const [PrismicData, setPrismicData] = useState({
    homeDoc: null,
    blogPosts: null,
  });
  const [, toggleNotFound] = useState(false);

  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        //Get the Home Document  Request
        const homeDoc = await Client.query(
          Prismic.Predicates.at("document.type", "feature_post"),
          { orderings: "[my.post.date desc]" }
        );
        //Get the Blog Document Request
        const blogPosts = await Client.query(
          Prismic.Predicates.at("document.type", "requin_blog"),
          { orderings: "[my.requin_blog.public_date desc]" }
        );
        //If Home Data get then store in PrismicData state
        if (homeDoc) {
          setPrismicData({
            homeDoc: homeDoc.results,
            blogPosts: blogPosts.results,
          });
        } else {
          console.warn(
            "Blog Home document was not found. Make sure it exists in your Prismic repository"
          );
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    };
    // Call the fetchPrismicData function
    fetchPrismicData();
  }, []);

  if (PrismicData.homeDoc) {
    return (
      <BlogContainer>
        <Container>
          <PostTagSidebar />
          <BlogWrapper>
            <PostList posts={PrismicData.blogPosts} />
          </BlogWrapper>
        </Container>
      </BlogContainer>
    );
  } else {
    return (
      <>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            height: "100%",
            top: "0",
            display: "flex",
            width: " 100%",
            background: "white",
            overflow: "hidden",
          }}
        >
          <Loader />
        </div>
      </>
    );
  }
}
const BlogContainer = styled.div`
  background-color: #fff;
  padding: 0 5vw;
  /* width: 100%; */
`;
const Container = styled.div`
  display: flex;
  max-width: 1170px;
  padding-top: 100px;
  margin: 0 auto;
`;

const BlogWrapper = styled.div`
  max-width: 870px;
`;
