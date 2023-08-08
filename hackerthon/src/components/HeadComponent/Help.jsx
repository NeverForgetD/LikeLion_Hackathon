import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper } from "./Help.style";
import { faCircleInfo, faHouse } from "@fortawesome/free-solid-svg-icons";

function Help() {
  const Button = styled.button`
    color: #da5757;
    border: none;
  `;
  return (
    <Wrapper>
      <Link to="/">
        <Button>
          <FontAwesomeIcon icon={faHouse} size="2x" />
        </Button>
      </Link>
      <Button>
        <FontAwesomeIcon icon={faCircleInfo} size="2x" />
      </Button>
    </Wrapper>
  );
}

export default Help;
