import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { linkResolver, Client } from "../../prismic-config";
import Loader from "../../Components/Loader/Loader";
import MetaTags from "react-meta-tags";
export default function Post({ match }) {
  const [prismicDoc, setPrismicDoc] = useState(null);
  const [notFound, toggleNotFound] = useState(false);
  const uid = match.params.uid;
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const doc = await Client.getByUID("requin_blog", uid);

        if (doc) {
          setPrismicDoc(doc);
        } else {
          console.warn(
            "Blog post document was not found. Make sure it exists in your Prismic repository"
          );
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    };

    fetchPrismicData();
  }, [uid]);
  console.log(notFound);
  if (prismicDoc) {
    return (
      <React.Fragment>
        <MetaTags>
          <link rel="image" href="../../public/sm-logo.png" />
          <title>{prismicDoc.data.title[0].text}</title>
          <meta
            name="description"
            content={prismicDoc.data.subtext.text}
          ></meta>
        </MetaTags>
        <BlogContainer>
          <BlogWrapper>
            <PostContainer>
              <PostWrapper>
                <PostLink to={linkResolver(prismicDoc)}>
                  <PostHeading>{prismicDoc.data.title[0].text}</PostHeading>
                </PostLink>
                <PostDate>
                  Posted <span>{prismicDoc.data.public_date}</span>
                </PostDate>
                <PostSubText>{prismicDoc.data.subtext.text}</PostSubText>

                <PostContent>
                  {prismicDoc.data.body[0].primary.text.map((data) => {
                    if (data.type === "paragraph") {
                      return <p>{data.text}</p>;
                    }
                    if (data.type === "heading2") {
                      return <h2>{data.text}</h2>;
                    }
                    if (data.type === "heading3") {
                      return <h3>{data.text}</h3>;
                    }
                    if (data.type === "heading4") {
                      return <h4>{data.text}</h4>;
                    }
                    if (data.type === "image") {
                      return <img src={data.url} alt="img" width="500px" />;
                    }
                    if (data.type === "embed") {
                      return (
                        <PostEmbed
                          dangerouslySetInnerHTML={{ __html: data.oembed.html }}
                          width="500px"
                        />
                      );
                    }
                    return null;
                  })}
                </PostContent>
              </PostWrapper>
            </PostContainer>
          </BlogWrapper>
        </BlogContainer>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

const BlogContainer = styled.div`
  background-color: #fff;
  /* display: flex; */
  padding: 0 5vw;
`;
const BlogWrapper = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  //
`;
const PostContainer = styled(Link)`
  background-color: black;
  font-family: "Lato", sans-serif;
`;
const PostWrapper = styled.div`
  /* background-color: lightcoral; */
  padding: 0 100px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: rgb(91, 105, 135);
  padding-bottom: 80px;
`;
const PostHeading = styled.h1`
  line-height: 60px;
  padding-top: 100px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
`;
const PostLink = styled(Link)`
  text-decoration: none;
  h1 {
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
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
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 30px;
  margin-left: 0px;
  color: rgba(51, 51, 51, 0.75);

  span {
    color: #7047ea;
    transition: cubic-bezier(1, 0, 0, 1) 0.3s ease;
  }
  :hover span {
    color: black;
  }
`;
const PostSubText = styled.div`
  margin-bottom: 2rem;
`;
const PostContent = styled.div`
  text-align: left;
  h2 {
    text-align: left;
    font-weight: normal;
    font-size: 24px;
    line-height: 45px;
    color: #031b4e;
    margin-top: 40px;
  }
  h3 {
    text-align: left;
    line-height: 45px;
    color: #031b4e;
    margin-top: 40px;
  }
  p {
    text-align: left;
    margin: 16px 0;
  }
  img {
    text-align: left;
    width: 95%;
  }
`;
const PostEmbed = styled.div`
  text-align: center;
  iframe {
    width: 100%;
    height: 500px;
  }
  div {
    img {
      width: 500px;
    }
  }
`;
