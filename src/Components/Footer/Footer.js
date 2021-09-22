import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <NavCommpany>
            <NavCompanyLogo>
              <img
                width="54px"
                height="54px"
                src="/assets/sm-logo.svg"
                alt="logo"
              />
            </NavCompanyLogo>
            <NavCompanyTagline>
              Turbo Assignment is assignment writing service company that
              provides assignment writing and solutions to students.
            </NavCompanyTagline>
            <NavSocialLinks>
              <NavSocialLink to="/youtube">
                <AiFillYoutube
                  size={20}
                  alt="social-logo"
                  aria-label="Youtube"
                />
              </NavSocialLink>
              <NavSocialLink to="/twitter">
                <IoLogoTwitter
                  size={20}
                  alt="social-logo"
                  aria-label="Twitter"
                />
              </NavSocialLink>
              <NavSocialLink to="/pinterest">
                <FaPinterest
                  size={20}
                  alt="social-logo"
                  aria-label="Pinterest"
                />
              </NavSocialLink>
              <NavSocialLink to="/facebook">
                <FaFacebook size={20} alt="social-logo" aria-label="Facebook" />
              </NavSocialLink>
              <NavSocialLink to="/instagram">
                <FaInstagram
                  size={20}
                  alt="social-logo"
                  aria-label="Instagram"
                />
              </NavSocialLink>
            </NavSocialLinks>
          </NavCommpany>
          <NavLinksContainer>
            <NavLinksWrapper>
              <NavLinksHeader>Services</NavLinksHeader>
              <FooterNavLinks>
                <FooterLinks>Writing</FooterLinks>
                <FooterLinks>Assignement</FooterLinks>
                <FooterLinks>Programming</FooterLinks>
                <FooterLinks>Course Work</FooterLinks>
                <FooterLinks>Grammer Check</FooterLinks>
              </FooterNavLinks>
            </NavLinksWrapper>
            <NavLinksWrapper>
              <NavLinksHeader>Company</NavLinksHeader>
              <FooterNavLinks>
                <FooterLinks to="/about">About</FooterLinks>
                <FooterLinks to="/blog">Blogs</FooterLinks>
                <FooterLinks>Contact</FooterLinks>
                <FooterLinks>Support</FooterLinks>
              </FooterNavLinks>
            </NavLinksWrapper>
          </NavLinksContainer>
        </FooterContainer>
        <WhatsappSection>
          <h3>Chat Support</h3>
          <a href="https://api.whatsapp.com/send?phone=+919352220187">
            <img
              src={"/assets/whatsapp.svg"}
              alt="Whatsapp"
              width="54px"
              height="100%"
            />
          </a>
        </WhatsappSection>
        <FooterBootom>
          <div>© 2021 Turbo Assignment. All rights reserved.</div>
        </FooterBootom>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.div`
  background-color: #fafafb;
  padding: 0 50px;
  transition: 0.3s all ease;
  @media only screen and (max-width: 767px) {
    padding: 32px;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const NavCommpany = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavCompanyLogo = styled(Link)`
  color: #000;
  align-items: center;
  display: flex;
`;
const NavCompanyTagline = styled.div`
  font-size: 12px;
  max-width: 256px;
  margin: 20px 0;
  line-height: 20px;
`;
const NavSocialLinks = styled.div``;
const NavSocialLink = styled(Link)`
  margin-right: 14px;
  color: #3d3d4e;
  &:hover {
    color: #000;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    margin-top: 32px;
    justify-content: space-around;
  }
`;

const NavLinksWrapper = styled.div`
  /* color: white; */
  margin-left: 150px;
  font-size: 14px;
  font-weight: 500;
  @media only screen and (max-width: 767px) {
    margin-left: 10px;
    width: 50%;
  }
`;
const NavLinksHeader = styled.div`
  font-weight: 600;
  color: #0d0c22;
`;
const FooterNavLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterLinks = styled(Link)`
  color: #3d3d4e;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
  margin-top: 16px;
  &:hover {
    color: #0d0c22;
  }
`;
const FooterBootom = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #3d3d4e;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  &:hover {
    color: #0d0c22;
  }
  padding: 50px 0;
  div {
    cursor: pointer;
  }
`;

const WhatsappSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
