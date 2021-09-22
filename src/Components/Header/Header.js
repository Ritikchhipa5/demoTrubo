import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogoutState } from "../../Actions/action";
import "./Header.css";
function Header(props) {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const showSideBar = () => {
    setOpen(!isOpen);
    // console.log(isOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderLeftWrapper>
            <img
              // width="34px"
              src="/assets/sm-logo.svg"
              alt="logo"
              width="34px"
              height="34px"
            />
          </HeaderLeftWrapper>
          <HeaderCenterWrapper>
            <LinksWrapper>
              <NavLinks>
                <NavLink to="/">Home</NavLink>
              </NavLinks>
              <NavLinks className="nav-services">
                <NavLink to="/checkout">Services</NavLink>
                <NavDropDownContainer className="nav-dropdown-conatiner">
                  <NavDropDownItem>
                    <NavDropDownLink to="/assignment">
                      <NavDropDownItemText>Assignment</NavDropDownItemText>
                      <BsArrowRightShort
                        size={20}
                        className="nav-dropdownitem-arrow"
                      />
                    </NavDropDownLink>
                  </NavDropDownItem>
                  <NavDropDownItem>
                    <NavDropDownLink to="#">
                      <NavDropDownItemText>Dissertation</NavDropDownItemText>
                      <BsArrowRightShort
                        size={20}
                        className="nav-dropdownitem-arrow"
                      />
                    </NavDropDownLink>
                  </NavDropDownItem>
                  <NavDropDownItem>
                    <NavDropDownLink to="#">
                      <NavDropDownItemText>Thesis</NavDropDownItemText>
                      <BsArrowRightShort
                        size={20}
                        className="nav-dropdownitem-arrow"
                      />
                    </NavDropDownLink>
                  </NavDropDownItem>
                  <NavDropDownItem>
                    <NavDropDownLink to="#">
                      <NavDropDownItemText>Research paper</NavDropDownItemText>
                      <BsArrowRightShort
                        size={20}
                        className="nav-dropdownitem-arrow"
                      />
                    </NavDropDownLink>
                  </NavDropDownItem>
                  <NavDropDownItem>
                    <NavDropDownLink to="#">
                      <NavDropDownItemText>Programming</NavDropDownItemText>
                      <BsArrowRightShort
                        size={20}
                        className="nav-dropdownitem-arrow"
                      />
                    </NavDropDownLink>
                  </NavDropDownItem>
                  <NavDropDownItem>
                    <NavDropDownLink to="#">
                      <NavDropDownItemText>
                        Website development
                      </NavDropDownItemText>
                      <BsArrowRightShort
                        size={20}
                        className="nav-dropdownitem-arrow"
                      />
                    </NavDropDownLink>
                  </NavDropDownItem>
                </NavDropDownContainer>
              </NavLinks>
              <NavLinks>
                <NavLink to="#">Sample</NavLink>
              </NavLinks>
              <NavLinks>
                <NavLink to="/blog">Blog</NavLink>
              </NavLinks>
              <NavLinks>
                <NavLink to="/about">About</NavLink>
              </NavLinks>
            </LinksWrapper>
          </HeaderCenterWrapper>
          <HeaderRightWrapper>
            <Form>
              <svg
                style={{
                  position: "absolute",
                  fill: "#9e9ea7",
                  top: "25%",
                  margin: "0 0 0 10px",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                role="img"
                className="icon icon-16 fill-current site-nav-inline-search-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                ></path>
              </svg>
              <Input
                type="search"
                placeholder="Search"
                autocomplete="off"
              ></Input>
            </Form>
            {props.login && (
              <>
                <NavLinks className="nav-services">
                  <NavLink to="#">
                    <img
                      style={{ borderRadius: "50%" }}
                      src="/assets/demo.png"
                      width="34"
                      height="34"
                      alt="user"
                    ></img>
                  </NavLink>
                  <NavDropDownContainer
                    className="nav-dropdown-conatiner"
                    style={{ right: "50px" }}
                  >
                    <NavDropDownItem>
                      <NavDropDownLink>
                        <NavDropDownItemText>My Profile</NavDropDownItemText>
                        <BsArrowRightShort
                          size={20}
                          className="nav-dropdownitem-arrow"
                        />
                      </NavDropDownLink>
                    </NavDropDownItem>
                    <NavDropDownItem>
                      <NavDropDownLink>
                        <NavDropDownItemText>
                          Order {JSON.parse(localStorage.getItem("user")).email}
                        </NavDropDownItemText>
                        <BsArrowRightShort
                          size={20}
                          className="nav-dropdownitem-arrow"
                        />
                      </NavDropDownLink>
                    </NavDropDownItem>
                    <NavDropDownItem
                      onClick={() => {
                        dispatch(setLogoutState());
                      }}
                    >
                      <NavDropDownLink>
                        <NavDropDownItemText>Log Out</NavDropDownItemText>
                        <BsArrowRightShort
                          size={20}
                          className="nav-dropdownitem-arrow"
                        />
                      </NavDropDownLink>
                    </NavDropDownItem>
                  </NavDropDownContainer>
                </NavLinks>
              </>
            )}
            {!props.login && (
              <>
                <NavLinks style={{ marginRight: "9px" }}>
                  <NavLink to="/login">Login</NavLink>
                </NavLinks>
                <Link to="/register">
                  <Button primary padding="6px 15px">
                    SignUp
                  </Button>
                </Link>
              </>
            )}
          </HeaderRightWrapper>
          <SideBarBurger>
            <GrMenu
              style={{
                marginLeft: "2rem",
                fontSize: "2rem",
                background: "none",
                cursor: "pointer",
              }}
              onClick={showSideBar}
            />
          </SideBarBurger>
          {isOpen && (
            <SidebarWrapper>
              <SideBar isOpen={isOpen}>
                <SideBarClose>
                  Logo
                  <AiOutlineClose
                    onClick={showSideBar}
                    style={{
                      marginLeft: "2rem",
                      fontSize: "2rem",
                      background: "none",
                      color: "white",
                      // position: "absolute",
                    }}
                  />
                </SideBarClose>
                <Sidebar />
              </SideBar>
            </SidebarWrapper>
          )}
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
}
const mapStateToProps = (state) => ({
  login: state.authReducer.isLoggedIn,
});
export default connect(mapStateToProps)(Header);

///Styled Compontnts
const HeaderWrapper = styled.div`
  background-color: var(--req-grey-bg);
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e0e0e8;
  align-items: center;
  @media only screen and (max-width: 767px) {
    /* justify-content: space-between; */
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  background-color: var(--req-grey-bg);
  line-height: var(--req-lineheight);
  font-size: var(--req-section-subhead);
  align-items: center;
  /* font-weight: 600; */
  padding: 0 50px;
  height: 50px;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 767px) {
    padding: 0 30px;
  }
`;
const HeaderLeftWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
`;
const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  /* font-weight: 600; */

  @media only screen and (max-width: 1023px) {
    display: none;
    transition: 0.2s ease;
  }
`;
const HeaderCenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 2;
  height: 100%;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`;
const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 9px;
  /* padding: 12px; */
`;
const NavLink = styled(Link)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  color: #000;
  padding: 0 12px;
  &:hover {
    color: var(--req-primary-color);
    transition: 0.3s ease-out;
  }
`;
const NavDropDownContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 50px;
  padding: 12px;
  border-radius: 12px;
  display: none;
  flex-direction: column;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;
const NavDropDownItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavDropDownLink = styled(Link)`
  margin: 3px;
  padding: 12px;
  display: flex;
  color: black;
  border-radius: 5px;
  justify-content: space-between;
  background-color: white;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(113, 72, 235, 0.59);
    color: white;
  }
`;
const NavDropDownItemText = styled.div`
  margin-right: 20px;
`;

const Form = styled.form`
  position: relative;
  align-self: center;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid transparent;
  max-width: 150px;
  padding: 5px;
  padding-left: 32px;
  border-radius: 5px;
  font-size: 12px;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
  background-color: #e8e8e8;
  color: #0d0c22;
  &:focus {
    background-color: #fff;
    border-color: rgba(112, 71, 234, 0.4);
    -webkit-box-shadow: 0 0 0 4px rgba(112, 71, 234, 0.1);
    box-shadow: 0 0 0 4px rgba(112, 71, 234, 0.1);
    outline: none;
  }
  &::placeholder {
    color: #9e9ea7;
  }
`;
const SideBarBurger = styled.div`
  display: flex;
  @media only screen and (min-width: 1023px) {
    display: none;
    transition: 0.2s ease;
  }
`;
const SidebarWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media only screen and (min-width: 1023px) {
    display: none;
    transition: 0.2s ease;
  }
`;

const SideBarClose = styled.div`
  display: flex;
  justify-content: space-between;
  background: none;
  margin: 0 12px;
  color: white;
  align-items: center;
  padding: 15px;
`;

const SideBar = styled.div`
  position: absolute;
  transition: ${(props) => (props.isOpen ? " 1.3s ease" : "1.5s ease")};
  background-color: #060b26;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: start;
  z-index: 100;
  /* position: fixed; */
  top: 0;

  right: ${(props) => (props.isOpen ? "0px" : "-100px")};
  flex-direction: column;
`;
