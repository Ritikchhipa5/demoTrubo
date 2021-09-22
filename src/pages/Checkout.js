import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";
// import { Textarea, DatePicker } from "react-rainbow-components";
export default function Checkout() {
  const [PagesNo, setPagesNo] = useState(1);
  const [datevalue, setDate] = useState(null);
  const [data, setData] = useState({
    email: "",
    university: "",
    course_code: "",
    subject_code: "",
    page: 1,
    date: null,
    text: "",
  });
  const fileUpload = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    fetch("http://localhost:8080/api/upload", {
      method: "POST",
      body: e.target.files,
    }).then((d) => console.log(d));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // let value = { username, university, course_code, subject_code, PagesNo };
    fetch("http://localhost:8080/api/checkout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
  function dateChange(value) {
    setDate(value);
    console.log(value);
    setData((state) => ({
      ...state,
      date: value,
    }));
  }
  function increment() {
    if (PagesNo < 50) {
      setPagesNo(PagesNo + 1);
      setData((state) => ({
        ...state,
        page: PagesNo + 1,
      }));
    }
  }
  function decrement() {
    if (PagesNo > 1) {
      setPagesNo(PagesNo - 1);
      setData((state) => ({
        ...state,
        page: PagesNo + 1,
      }));
    }
  }

  return (
    <>
      <CheckOutt>
        <CheckoutContainer>
          <CheckoutWrapper>
            <CheckoutSection1>
              <Section1Header>
                <Section1H1>
                  Discover the top Experts {"&"} Tell us What yo need
                </Section1H1>
              </Section1Header>
              <Section1SiderBarImage>
                <Section1Image
                  width="100px"
                  src={"/assets/order.svg"}
                ></Section1Image>
              </Section1SiderBarImage>
            </CheckoutSection1>
            <CheckoutSection2Container>
              <Section2Wrapper>
                <Section2Header>
                  <h3 style={{ margin: "10px 0 " }}>Order Details</h3>
                  <div
                    style={{
                      fontWeight: 300,
                      fontSize: "12px",
                      color: "#25262de8",
                    }}
                  >
                    Compete your purchase by providing your payment details.
                  </div>
                </Section2Header>
                <Section2FielsSet>
                  <Section2Lable>Email Address </Section2Lable>
                  <Section2Input
                    type="text"
                    placeholder={"Email"}
                    onChange={(e) => {
                      e.preventDefault();
                      // setusername(e.target.value.trim());
                      setData((state) => ({
                        ...state,
                        email: e.target.value.trim(),
                      }));
                    }}
                  />
                </Section2FielsSet>
                <RowFieldSet>
                  <Section2FielsSet>
                    <Section2Lable>First Name</Section2Lable>
                    <Section2Input placeholder={"First Name"} />
                  </Section2FielsSet>
                  <Section2FielsSet>
                    <Section2Lable>Last Name</Section2Lable>
                    <Section2Input placeholder={"Last Name"} />
                  </Section2FielsSet>
                </RowFieldSet>
                <Section2FielsSet>
                  <Section2Lable>University</Section2Lable>
                  <Section2Input
                    placeholder={"University"}
                    onChange={(e) => {
                      e.preventDefault();
                      setData((state) => ({
                        ...state,
                        university: e.target.value.trim(),
                      }));
                    }}
                  />
                </Section2FielsSet>
                <RowFieldSet>
                  <Section2FielsSet>
                    <Section2Lable>Course Code</Section2Lable>
                    <Section2Input
                      type="text"
                      placeholder={"Course Code"}
                      onChange={(e) => {
                        e.preventDefault();
                        setData((state) => ({
                          ...state,
                          course_code: e.target.value.trim(),
                        }));
                      }}
                    />
                  </Section2FielsSet>
                  <Section2FielsSet>
                    <Section2Lable>Subject Code</Section2Lable>
                    <Section2Input
                      placeholder={"Subject Code"}
                      onChange={(e) => {
                        e.preventDefault();
                        dateChange(e.target.value);
                      }}
                    />
                  </Section2FielsSet>
                </RowFieldSet>
                <Section2FielsSet>
                  <Section2Lable>Numer of Pages</Section2Lable>
                  <PagesContainer>
                    <button onClick={decrement}>-</button>
                    <Section2Input
                      type="text"
                      value={PagesNo}
                      readonly
                      style={{ flex: 6 }}
                    />
                    <button onClick={increment}>+</button>
                  </PagesContainer>
                </Section2FielsSet>
                <Section2FielsSet>
                  <Section2Lable>DeadLine</Section2Lable>
                  <Section2Input
                    type="date"
                    placeholder={"Date"}
                    onChange={(e) => {
                      e.preventDefault();
                      // setscode(e.target.value.trim());
                      dateChange(e.target.value);
                    }}
                  />
                </Section2FielsSet>
                <UploadFileContainer>
                  <UploadFileWrapper>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept=".pdf,image/*,.zip "
                      multiple
                      onChange={fileUpload}
                    ></input>
                    <label htmlFor="file">
                      <div id="cloud_upload">
                        <AiOutlineCloudUpload size={20} />
                      </div>
                    </label>
                  </UploadFileWrapper>
                  <TextArea placeholder="Write the description about your project" />
                </UploadFileContainer>
                <SidebarButton onClick={handleSubmit}>Order Now</SidebarButton>
              </Section2Wrapper>
            </CheckoutSection2Container>
          </CheckoutWrapper>
        </CheckoutContainer>
      </CheckOutt>
    </>
  );
}

const CheckOutt = styled.div`
  height: 100%;
  position: relative;
  /* overflow: hidden; */
`;
const CheckoutContainer = styled.div`
  font-family: var(--req-font-family);
  height: 100%;
  position: relative;
`;
const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const CheckoutSection1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #f3f3f4;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const Section1H1 = styled.h1`
  font-weight: bold;
  font-size: 30px;
  text-align: left;
  padding: 0 10px;
  @media only screen and (max-width: 768px) {
    font-size: 22px;
    word-spacing: 3px;
    letter-spacing: 1px;
  }
`;
const Section1Header = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  padding: 64px 64px 30px;
  font-weight: 900;
  color: #25262de8;
  @media only screen and (max-width: 1024px) {
    padding: 20px;
  }
`;
const Section1SiderBarImage = styled.div`
  flex: 2;
  width: 80%;

  margin: 0 auto;
`;
const Section1Image = styled.img`
  width: 100%;
`;
const CheckoutSection2Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;
const Section2Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 30px 30px 30px 30px;
  #example-textarea-1 > div {
    /* border-radius: 5px; */
    border: none;
  }
  #example-textarea-1 div {
    /* border-radius: 5px; */
    box-shadow: none;
  }

  #example-textarea-1 > div > textarea {
    font-family: var(--req-font-family);
  }
`;
const Section2Header = styled.header`
  display: flex;
  flex-direction: column;
  color: #25262d;
  justify-content: center;
  font-family: var(--req-font-family);
`;
const Section2FielsSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  div > div > input {
    border-radius: 5px;
    border: 1px solid #eaeaec;
  }
`;
const Section2Lable = styled.label`
  font-size: var(-req-font-size-12);
  margin: 10px 0;
  box-sizing: border-box;
`;
const Section2Input = styled.input`
  outline: none;
  margin: 0 2px 2px 2px;
  transition: 0.5s linear 0s;
  padding: 12px;
  border: 1px solid #eaeaec;
  border-radius: 5px;
  &:focus {
    margin: 0 2px 2px;
    border: 1px solid transparent;
    border-color: var(--req-primary-color);
    border: 0 0 0 4px rgb(234 76 137 / 10%);
  }
`;
const SidebarButton = styled.div`
  background-color: var(--req-primary-color);
  margin: 20px auto;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  &:hover {
    transition: 0.5s ease;
    background-color: rgba(113, 72, 235, 0.79);
  }
`;
const PagesContainer = styled.div`
  display: flex;
  button {
    flex: 1;
    background-color: var(--req-primary-color);
    color: white;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const RowFieldSet = styled.div`
  display: flex;
`;
const UploadFileWrapper = styled.div`
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  label div {
    padding: 10px;
    margin-left: 10px;
  }
  label #cloud_upload {
    line-height: 3px;
    color: var(--req-primary-color);
  }
`;

const UploadFileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid #eaeaec;
  border-radius: 5px;
  margin: 10px 0;
  :hover {
    border: 1px solid var(--req-primary-color);
  }
`;

const TextArea = styled.textarea`
  min-height: 70px;
  height: 150px;
  border-radius: 5px;
  padding: 10px;
  font-family: var(--req-font-family);
  word-spacing: 4px;
  border: none;
  background-color: white;
  outline: none;
`;
