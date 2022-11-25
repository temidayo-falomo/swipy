import React from "react";
import { FirstPageContainer } from "./FirstPage.styled";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <FirstPageContainer>
      <h1>
        Hi, I am First Page <Link to="/second">Go To Second Page</Link>
      </h1>
    </FirstPageContainer>
  );
}

export default FirstPage;
