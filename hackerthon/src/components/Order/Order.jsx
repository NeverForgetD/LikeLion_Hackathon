import React, { useState } from "react";
import "./Order.css";

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

function Order({ data, Kdata, Bdata, handleOrder, handleProductClick }) {
  ////Modal Handling
  const [activeItem, setActiveItem] = useState(null); // 모달에 표시할 아이템 상태
  const [modalOpen, setModalOpen] = useState(false); // 모달 오픈 여부 상태

  const handleItemClick = (item) => {
    setActiveItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveItem(null);
  };

  /////카테고리
  const [activeCategory, setActiveCategory] = useState("추천메뉴");
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  //////주문 담기
  const confirm = (item) => {
    handleOrder(item);
  };

  

  //////카테고리에 따른 데이터 렌더링
  const renderMenuItems = () => {
    console.log({ Kdata }, { data });
    if (activeCategory === "추천메뉴") {
      return data.map((item) => (
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
      ));
    } else if (activeCategory === "김밥") {
      return Kdata.map((item) => (
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
      ));
    } else {
      return Bdata.map((item) => (
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
      ));
    }
  };
  return (
    <Wrapper>
      <Category>
        <button
          className={activeCategory === "추천메뉴" ? "active" : "none"}
          onClick={() => handleCategoryClick("추천메뉴")}
        >
          추천메뉴
        </button>
        <button
          className={activeCategory === "김밥" ? "active" : "none"}
          onClick={() => handleCategoryClick("김밥")}
        >
          김밥
        </button>
        <button
          className={activeCategory === "분식" ? "active" : "none"}
          onClick={() => handleCategoryClick("분식")}
        >
          분식
        </button>
      </Category>
      <Menu>{renderMenuItems()}</Menu>

      {modalOpen && activeItem && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-content1">
              <div className="img">
                <img src={activeItem.imageSrc} alt={activeItem.name} />
              </div>
              <div className="info">
                <p className="name">{activeItem.name}</p>
                <p className="price">
                  <span className="price-value">{activeItem.price}</span>
                  <span className="price-unit">원</span>
                </p>
              </div>
            </div>
            <hr className="divider" />
            <div className="modal-content2">
              <button className="add" >
                단무지 추가
              </button>
              <p className="price">
                <span className="price-value">500</span>
                <span className="price-unit">원</span>
              </p>
            </div>

            <hr className="divider" />
            <div className="modal-content3">
              <button
                className="confirm"
                onClick={() => {
                  confirm(activeItem);
                  closeModal();
                }}
              >
                주문담기
              </button>
              <button className="close" onClick={closeModal}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Order;
