import React from "react";
import { styled } from "styled-components";
import { Cart, Wrapper, Container } from "./Options.style";
import { Link } from "react-router-dom";
function Options() {
  const Set = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0px 10px;
  `;
  const Del = styled.button`
    width: 80px;
    height: 80px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #3b3b3b;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  `;
  const Time = styled.p`
    font-weight: bold;
    text-align: center;
    width: 80px;
    font-size: 18px;
    padding-right: 5px;
  `;
  const Selected = styled.button`
  width : 170px;
  margin-left : 6px;
  margin-bottom: 7px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: white;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);s`;
  const Pay = styled.button`
    margin-left: 6px;
    width: 170px;
    margin-bottom: 5px;
    height: 35px;
    border-radius: 10px;
    border: none;
    background-color: #8e8e8e;
    color: #ffffff;
    font-size: 19px;
    font-weight: bolder;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  `;

  return (
    <Wrapper>
      <Cart>선택된 상품 :</Cart>
      <Container>
        <Set>
          <Time>
            남은 시간<br></br>26초
          </Time>
          <Del>
            전체
            <br />
            삭제
          </Del>
        </Set>
        <Selected>선택한 상품</Selected>
        <Link to="/pay">
          <Pay>결제하기</Pay>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Options;
