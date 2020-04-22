import React from "react";
import styled from "styled-components";

const ErrorSegment = styled.div`
  border: 1px solid #dc195a;
  border-radius: 10px;
  width: 75%;
  margin: auto;
  background-color: #ed6f66;
  text-align: center;
  padding: 4px;
`;

function Error({ text }) {
  return <ErrorSegment>{text}</ErrorSegment>;
}

export default Error;
