import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #da5757;
  text-align: center;
  color: white;
  height: 55px;
  padding-top: 1px;
`;

function FooterComponent() {
  return (
    <StyledFooter>
      <p>advertisement</p>
    </StyledFooter>
  );
}

export default FooterComponent;
