import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faClipboard } from "@fortawesome/free-regular-svg-icons";
import FooterComponent from "../FooterComponent/FooterComponent";
import {
  Wrapper1,
  Wrapper2,
  Wrapper,
  Button,
  Title,
} from "./StartComponent.styles";

function StartComponent() {
  return (
    <Wrapper>
      <Wrapper1>
        <Title>키오스크 연습</Title>
      </Wrapper1>
      <Wrapper2>
        <Link to="/Order">
          <Button>
            시작하기
            <br />
            <br />
            <FontAwesomeIcon icon={faCirclePlay} size="3x" />
          </Button>
        </Link>
        <Button>
          설명보기
          <br />
          <br />
          <FontAwesomeIcon icon={faClipboard} size="3x" />
        </Button>
      </Wrapper2>

      <FooterComponent />
    </Wrapper>
  );
}

export default StartComponent;
