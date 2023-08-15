import { styled } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-around;
  height: 200px;
`;

const Cart = styled.div`
  background-color: white;
  overflow-y: scroll;
  width: 190px;
  height: 155px;
  padding-top: 20px;

  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Wrapper, Cart, Container };
