import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

function ProductDetailsModal({ selectedProduct, onClose }) {
  const Button = styled.button`
    border: black 1px solid;
    border-radius: 10px;
    font-weight: bold;

    background-color: white;
  `;

  return (
    <ModalOverlay>
      <ModalContent>
        <p>{selectedProduct.name}</p>
        <p>수량: {selectedProduct.quantity}</p>
        <p>가격: {selectedProduct.price}원</p>
        <Button onClick={onClose}>닫기</Button>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ProductDetailsModal;
