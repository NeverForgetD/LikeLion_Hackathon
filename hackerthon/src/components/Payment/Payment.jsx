import React from "react";
import { Wrapper, Title, Container, Text } from "./Payment.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import FooterComponent from "../FooterComponent/FooterComponent";

function Payment() {
  return (
    <div>
      <Wrapper>
        <Title>카드 결제</Title>
        <Container>
          <FontAwesomeIcon
            icon={faIdCard}
            style={{ color: "#009adb" }}
            size="4x"
          />

          <Text>카드 결제</Text>
        </Container>
        <Title>현금 결제</Title>
        <Container>
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
