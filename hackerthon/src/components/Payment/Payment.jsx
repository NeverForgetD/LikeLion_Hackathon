import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import { Wrapper, Title, Container, Text } from "./Payment.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import FooterComponent from "../FooterComponent/FooterComponent";

function Payment() {
  const navigate = useNavigate(); // useNavigate 초기화

  const handleCardPayment = () => {
    // 카드 결제 버튼 클릭 시
    navigate("/"); // 시작 페이지로 이동
  };

  const handleCashPayment = () => {
    // 현금 결제 버튼 클릭 시
    navigate("/"); // 시작 페이지로 이동
  };

  return (
    <div>
      <Wrapper>
        <Title>카드 결제</Title>
        <Container onClick={handleCardPayment}>
          {" "}
          {/* 카드 결제 컨테이너에 클릭 핸들러 추가 */}
          <FontAwesomeIcon
            icon={faIdCard}
            style={{ color: "#009adb" }}
            size="4x"
          />
          <Text>카드 결제</Text>
        </Container>
        <Title>현금 결제</Title>
        <Container onClick={handleCashPayment}>
          {" "}
          {/* 현금 결제 컨테이너에 클릭 핸들러 추가 */}
          <FontAwesomeIcon
            icon={faMoneyBill1}
            style={{ color: "#27b300" }}
            size="4x"
          />
          <Text>현금 결제</Text>
        </Container>
      </Wrapper>
      <FooterComponent />
    </div>
  );
}

export default Payment;
