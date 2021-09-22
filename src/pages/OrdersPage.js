import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OrderCard from "../Components/OrderCard/OrderCard";
export default function Orders(params) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/orders/ritik")
      .then((res) => res.json())
      .then((d) => setdata(d.orders))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <>
      <OrdersContainer>
        <OrdersWrapper>
          <OrderHeaderWrapper>
            <OrderHeaderContainer>
              <div>Order ID</div>
              <div>Customer</div>
              <div>Status</div>
              <div>Delivered Date </div>
            </OrderHeaderContainer>
          </OrderHeaderWrapper>
          {data.map((d) => (
            <OrderCard data={d} />
          ))}
        </OrdersWrapper>
      </OrdersContainer>
    </>
  );
}
const OrdersContainer = styled.div`
  background-color: white;
  min-height: 550px;
  background-color: #f6f7f9;
  padding-top: 30px;
`;
const OrdersWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  max-width: 1100px;
  border-radius: 5px;
  padding-bottom: 30px;
`;
const OrderHeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  align-items: center;
  padding: 20px 0;
  @media only screen and (max-width: 1023px) {
    width: 700px;
  }
`;
const OrderHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
