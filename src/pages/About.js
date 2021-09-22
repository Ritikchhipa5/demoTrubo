import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function About() {
  return (
    <>
      <AboutContainer>
        <HeroContainer>
          <HeroContainerImage
            src={"/assets/about.png"}
            img="coverimg"
          ></HeroContainerImage>
        </HeroContainer>
        <AboutContentWrapper>
          <AboutContent>
            <h2>About Us</h2>
            <p>
              Does education play a significant role in one’s life? Yes, of
              course without it one cannot dream for their success. Education
              helps in changing the way of thinking and makes human life worth
              it. Our website provides quality and unique study material that
              makes the bigger challenges easy for the students. Our vision is
              to make the students more productive and this can be by providing
              optimum solutions for their problem. This website contains the
              solve papers, assignment solutions, various kinds of study
              material, and so on to make the future bright. It is free;
              students can download these study materials and store them in
              their storage devices. The team contains experts from various
              fields that express their knowledge in making the study material
              more effective and interesting.
            </p>
          </AboutContent>
        </AboutContentWrapper>
        <CompanyValue>
          <CompanyValueContainer>
            <h2>Company Values</h2>
            <CompanyValueItems>
              {data.map((d, key) => (
                <CompanyValueItem
                  key={key}
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                >
                  <div>{d.title}</div>
                  <p>{d.para}</p>
                </CompanyValueItem>
              ))}
            </CompanyValueItems>
          </CompanyValueContainer>
        </CompanyValue>
        <AboutJoinContainer>
          <AboutJoin>
            <AboutJoinText>
              <h1>Join The Turbo Asssignment</h1>
              <p>
                We're working hard to create the best educational experience
                ever, and we're always on the lookout for great people to help
                us fulfill that vision.
              </p>
            </AboutJoinText>
            <AboutJoinButton to="/">Careers at Turbo </AboutJoinButton>
            <AboutJoinImg
              src={"/assets/join.svg"}
              img="coverimg"
            ></AboutJoinImg>
          </AboutJoin>
        </AboutJoinContainer>
      </AboutContainer>
    </>
  );
}
const AboutContainer = styled.div`
  /* width: 100%; */
`;
const HeroContainer = styled.div`
  background: white;
  width: 100%;
`;
const HeroContainerImage = styled.img`
  width: 100%;
`;
const AboutContentWrapper = styled.div`
  background-color: white;
  color: #000000cc;
`;
const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  h2 {
    padding: 30px 0;
  }
  p {
    line-height: 160%;
    padding: 30px 0;
    font-size: 16px;
  }
`;

const CompanyValue = styled.div``;
const CompanyValueContainer = styled.div`
  background-color: rgb(244, 245, 249);
  padding: 40px;
  h2 {
    color: #000000cc;
    text-align: center;
    margin: 20px 0;
  }
`;
const CompanyValueItems = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const CompanyValueItem = styled.div`
  min-height: 200px;
  width: 200px;
  margin: 15px;
  padding: 15px;
  background-color: white;
  text-align: center;
  line-height: 160%;
  border: 1px solid #e5e8ed;
  cursor: pointer;
  box-shadow: 0 2px 4px rgb(3 27 78 / 6%);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-radius: 12px;
  div {
    margin: 20px 0;
    font-weight: bold;
    font-size: 20px;
    color: #7047eac7;
  }
  p {
    font-size: 16px;
    color: #5b6987;
  }
  &:hover {
    box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 0.5px #7047eac7;
  }
`;
const AboutJoinContainer = styled.div`
  background-color: white;
  padding: 20px 0;
`;
const AboutJoin = styled.div`
  color: #000000cc;
  text-align: center;
  margin: 0 auto;
  max-width: 1000px;
  padding: 80px;
  background-color: #f8f8fa;
  border-radius: 12px;
  border: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const AboutJoinText = styled.div`
  margin: 0 auto;
  max-width: 800px;
  line-height: 160%;
  p {
    margin-top: 20px;
  }
`;
const AboutJoinButton = styled(Link)`
  padding: 20px 30px;
  color: white;
  background-color: black;
  max-width: 200px;
  align-self: center;
  border-radius: 5px;
  margin-top: 20px;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  &:hover {
    background-color: #000000cc;
  }
`;
const AboutJoinImg = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 40px;
`;

const data = [
  {
    title: "A+ Students",
    para: "We believe in sharing knowledge, learning continuously andchallenging ourselves.",
  },
  {
    title: "Efficiency + Scalability + Data = Success",
    para: "Our formula for decision making",
  },
  {
    title: "Teamwork Makes the Dream Work",
    para: "Transparent and direct communication creates a strong and trustful team",
  },
];
