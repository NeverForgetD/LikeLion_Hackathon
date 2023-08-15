import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Cart, Wrapper, Container } from "./Options.style";
import { Link, useNavigate } from "react-router-dom";
import "./Options.css";
import ProductDetailsModal from "./ProductDetailsModal";

function Options({ selectedData, handleClear }) {
  const [remainingTime, setRemainingTime] = useState(60);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // 선택한 상품 정보 저장

  const navigate = useNavigate();

  const updateSelectedProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleProductClick = (product) => {
    if (product) {
      // 선택한 상품이 있을 경우에만 모달 열기
      updateSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleNewProductAdded = (newProduct) => {
    updateSelectedProduct(newProduct);
    setIsModalOpen(true);
  };

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
    margin-right: 0px;
  `;
  const Time = styled.p`
    font-weight: bold;
    text-align: center;
    width: 80px;
    font-size: 18px;
    padding-right: 5px;
    margin-right: 0px;
    margin-left: 0px;

    span {
      font-size: 24px;
      color: #da5757;
    }
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

  const selectedItems = selectedData.map((item) => ({
    name: item.name,
    price: item.price * item.quantity,
    quantity: item.quantity,
  }));

  const handleClearWithConfirmation = () => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
      handleClear();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timer);
        navigate("/"); // 시간이 다 되면 시작 페이지로 이동
      }
    }, 1000); // 1초마다 타이머 작동

    return () => {
      clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, [remainingTime, navigate]);

  return (
    <Wrapper>
      <Cart>
        <div className="container">
          <div className="text-container">
            {selectedItems.map((item, index) => (
              <div>
                <div key={index} className="wrapper">
                  <div className="info">
                    <p onClick={() => handleProductClick(item)}>
                      {item.name} {item.quantity}개
                    </p>
                  </div>

                  <div className="info">
                    <p>{item.price}원</p>
                  </div>
                </div>
                <hr className="divider" />
              </div>
            ))}
          </div>
        </div>
      </Cart>
      <Container>
        <Set>
          <Time>
            남은 시간<br></br>
            <span>{remainingTime}</span>초
          </Time>
          <Del onClick={handleClearWithConfirmation}>
            전체
            <br />
            삭제
          </Del>
        </Set>
        <Selected
          onClick={() =>
            handleProductClick(selectedItems[selectedItems.length - 1])
          }
        >
          선택한 상품
        </Selected>
        <Link to="/pay">
          <Pay>결제하기</Pay>
        </Link>
      </Container>

      {isModalOpen && (
        <ProductDetailsModal
          selectedProduct={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Wrapper>
  );
}

export default Options;
