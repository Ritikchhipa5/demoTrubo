import React from "react";
import styled from "styled-components";
export default function OrderCard(props) {
  const date = new Date(props.data.date);

  function toggleStatus(status) {
    switch (status) {
      case "Progress":
        return "#ffa701";
      case "Delivered":
        return "#38c48e";
      case "Cancel":
        return "#fb4545";
      default:
        break;
    }
  }

  return (
    <>
      <OrderCardContainer>
        <OrderCardWrapper>
          <div style={{ color: "#1f60dc" }}>{props.data.orderid}</div>
          <div>Ritik</div>
          <div
            style={{
              width: "75px",
              background: toggleStatus(props.data.order_status),
              padding: "5px 10px",
              textAlign: "center",
              borderRadius: "3px",
            }}
          >
            <span
              style={{
                color: "#fff",
                minWidth: "100px",
              }}
            >
              {props.data.order_status}
            </span>
          </div>

          <div>
            {" " +
              date.getDate() +
              "/" +
              date.getMonth() +
              "/" +
              date.getFullYear()}
          </div>
        </OrderCardWrapper>
      </OrderCardContainer>
    </>
  );
}

const OrderCardContainer = styled.div`
  padding-bottom: 12px;
  :first-child {
    padding-top: 15px;
  }
`;
const OrderCardWrapper = styled.div`
  color: black;
  display: flex;
  width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  color: #3d3d4e;
  font-size: 13px;
  border: 1px solid #e8e8e8;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  background-color: #fff;
  @media only screen and (max-width: 1023px) {
    width: 700px;
  }
  div {
    padding: 15px 20px;
    margin: 0 12px;
  }
  :hover {
    border: 1px solid #7047eab5;
    
  }
`;
