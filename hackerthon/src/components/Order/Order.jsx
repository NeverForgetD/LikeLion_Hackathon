import React, { useState } from "react";

import { styled } from "styled-components";
import {
  Wrapper,
  Category,
  Menu,
  Item,
  ImgWrapper,
  Price,
  Name,
} from "./Order.style";

function Order({ data }) {
  const Button = styled.button`
    width: 120px;
    border: none;
    border-radius: 10px;
    height: 45px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-size: 19px;
    background-color: #da5757;
    color: white;
  `;

  const Button1 = styled.button`
    width: 120px;
    border: none;
    border-radius: 10px;
    height: 45px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-size: 19px;
    color: #da5757;
    background-color: white;
  `;

  const handleItemClick = (item) => {
    
  };

  return (
    <Wrapper>
      <Category>
        <Button>추천메뉴</Button>
        <Button1>김밥</Button1>
        <Button1>분식</Button1>
      </Category>
      <Menu>
        {data.map((item) => (
          <Item key={item.id} onClick={() => handleItemClick(item)}>
            <ImgWrapper>
              <img
                src={item.imageSrc}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </ImgWrapper>
            <Name>{item.name}</Name>
            <Price>{item.price}원</Price>
          </Item>
        ))}
      </Menu>
    </Wrapper>
  );
}

export default Order;
