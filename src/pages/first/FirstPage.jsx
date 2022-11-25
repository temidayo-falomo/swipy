import React from "react";
import { FirstPageContainer } from "./FirstPage.styled";
import { Link } from "react-router-dom";
import Second from "../second/Second";

function FirstPage() {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  // function handleTouchStart(e) {
  //   setTouchStart(e.targetTouches[0].clientX);
  // }

  // function handleTouchMove(e) {
  //   setTouchEnd(e.targetTouches[0].clientX);
  // }

  // function handleTouchEnd() {
  //   if (touchStart - touchEnd > 150) {
  //     // do your stuff here for left swipe
  //     // moveSliderRight();
  //   }

  //   if (touchStart - touchEnd < -150) {
  //     // do your stuff here for right swipe
  //     // moveSliderLeft();
  //     console.log("left swipe");
  //   }
  // }

  return (
    <FirstPageContainer>
      <h1>Hehehehehe</h1>
      <Second />
    </FirstPageContainer>
  );
}

export default FirstPage;
