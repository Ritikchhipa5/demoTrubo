import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MetaTags from "react-meta-tags";
export default function HomePage() {
  return (
    <>
      <MetaTags>
        <title>Turbo Assignment</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
        <meta
          name="description"
          content="Place your order and get a chance to join hands with experts for
                your project submission."
        />
        <meta property="og:title" content="Tarbo Assignment" />
        <meta property="og:image" content="/public/assets/study.svg" />

        <meta
          property="service"
          content="Web Development ,Game Development,Software Development,Acadmic Solutions,Contenet Writing,Assigment,Programmig   "
        ></meta>
      </MetaTags>
      <HomeContainer>
        <HomeHeroContainer>
          <HomeHeroTextWrapper>
            <HomeHeroTextColoumn>
              <h1>Build Better Assignments.</h1>
              <p>
                Place your order and get a chance to join hands with experts for
                your project submission.
              </p>
              <HomeGetStartButton
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease"
              >
                Get Started
              </HomeGetStartButton>
            </HomeHeroTextColoumn>
          </HomeHeroTextWrapper>
          <HomeHeroImgaeWrapper>
            <HeroImg
              src={"/assets/study.svg"}
              alt="side-image"
              width="300px"
              height="100%"
            ></HeroImg>
          </HomeHeroImgaeWrapper>
        </HomeHeroContainer>
        <HomeSectionContainer>
          <HomeSection1Container>
            <HomeSection1Wrapper>
              <h2>Our Service EveryThing You need</h2>
              <HomeSection1RowContainer>
                <Section1Item
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                >
                  <Section1ItemImg
                    src="/assets/servicesImg/world-wide-web.png"
                    width="30px"
                    height="30px"
                    alt="icon"
                  ></Section1ItemImg>
                  <Section1ItemText>Web Development</Section1ItemText>
                </Section1Item>
                <Section1Item
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                >
                  <Section1ItemImg
                    src="/assets/servicesImg/window.png"
                    width="30px"
                    height="30px"
                    alt="icon"
                  ></Section1ItemImg>
                  <Section1ItemText>Software Development</Section1ItemText>
                </Section1Item>
              </HomeSection1RowContainer>
              <HomeSection1RowContainer>
                <Section1Item
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                >
                  <Section1ItemImg
                    src="/assets/servicesImg/smartphone.png"
                    width="30px"
                    height="30px"
                    alt="icon"
                  ></Section1ItemImg>
                  <Section1ItemText>Mobile Development</Section1ItemText>
                </Section1Item>
                <Section1Item
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                >
                  <Section1ItemImg
                    src="/assets/servicesImg/game.png"
                    width="30px"
                    height="30px"
                    alt="icon"
                  ></Section1ItemImg>
                  <Section1ItemText>Game Development</Section1ItemText>
                </Section1Item>
              </HomeSection1RowContainer>

              <HomeSection1RowContainer>
                <Section1Item
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                >
                  <Section1ItemImg
                    src="/assets/servicesImg/idea.png"
                    width="30px"
                    height="30px"
                    alt="icon"
                  ></Section1ItemImg>
                  <Section1ItemText>Acadmic Solution</Section1ItemText>
                </Section1Item>
                <Section1Item
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                >
                  <Section1ItemImg
                    src="/assets/servicesImg/writing.png"
                    alt="icon"
                    width="30px"
                    height="30px"
                  ></Section1ItemImg>
                  <Section1ItemText>Content Writing</Section1ItemText>
                </Section1Item>
              </HomeSection1RowContainer>
            </HomeSection1Wrapper>
          </HomeSection1Container>
          <HomeSection2Wrapper>
            <p>
              <img src={"/assets/coma.svg"} width="21" height="21" alt="icon" />
              Reading for just 10 minutes per day increase the number of words a
              child reads in a year by more than half a million .
              <img src={"/assets/coma.svg"} alt="img" width="21" height="21" />
              <div>
                Emran Emon<span> :-CEO of Emarn Cafe </span>
              </div>
            </p>
          </HomeSection2Wrapper>
        </HomeSectionContainer>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  background-color: #f8f8fa;
`;
const HomeHeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: rgb(3 27 78 / 10%) 0px 2px 4px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const HomeHeroTextColoumn = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px;
  h1 {
    font-size: 3em;
    font-weight: bold;
    max-width: 300px;
  }
  p {
    margin-top: 30px;
    font-weight: 300;
    max-width: 400px;
  }
`;
const HomeHeroTextWrapper = styled.div`
  margin: 0 5%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  @media only screen and (max-width: 767px) {
    margin: 12px 30px;
    min-width: 0;
  }
  @media only screen and (max-width: 1023px) {
    margin: 12px 30px;
    min-width: 300px;
  }
`;
const HomeHeroImgaeWrapper = styled.div`
  margin: 0 140px;
  @media only screen and (max-width: 1024px) {
    margin: 0 50px;
  }
  @media only screen and (max-width: 767px) {
    margin: 12px 30px;
    text-align: center;
  }
`;
const HeroImg = styled.img`
  width: 100%;
  /* min-width: 350px; */
  max-width: 600px;
  @media only screen and (max-width: 767px) {
    padding: 0 12px;
    width: 300px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 12px;
    width: 350px;
  }
`;

const HomeSectionContainer = styled.div``;
const HomeSection1Container = styled.div`
  background-image: url("/assets/bg.svg");
  background-repeat: repeat;
  background-size: auto;
`;
const HomeSection1Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  h2 {
    text-align: center;
    margin: 20px 0;
  }
  @media only screen and (max-width: 428px) {
    width: 0;
    margin: 0;
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    width: 100vw;
  }
  @media only screen and (max-width: 767px) {
    width: 100vw;
  }
`;
const HomeSection1RowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section1Item = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(113, 72, 235, 0.11);
  border-radius: 12px;
  width: 200px;
  padding: 20px 30px;
  margin: 15px 0;
  align-items: center;
  margin-right: 30px;
  @media only screen and (min-width: 428px) {
    margin-right: 0;
  }
`;
const Section1ItemImg = styled.img`
  width: 30px;
  margin-right: 40px;
`;
const Section1ItemText = styled.div``;
const HomeSection2Wrapper = styled.div`
  padding: 120px 30px;
  text-align: center;
  background-color: #7047ea;
  color: white;
  p {
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
    font-size: 30px;
    img:nth-child(2) {
      transform: rotate(180deg);
    }
    div {
      margin-top: 20px;
      font-size: 20px;
      span {
        font-size: 12px;
      }
    }
  }
`;
const HomeGetStartButton = styled(Link)`
  color: white;
  padding: 12px;
  background-color: black;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  margin-top: 30px;
`;
