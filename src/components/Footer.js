import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #4477ff;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30px;
  position: relative;
  margin-top: 15px;
`;

function Footer(props) {
  return <StyledFooter />;
}

export default Footer;
