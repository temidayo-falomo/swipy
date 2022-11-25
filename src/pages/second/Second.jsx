import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SecondContainer } from "./Second.styled";

function Second() {
  let navigate = useNavigate();

  const currWidth = window.innerWidth;

  //i
  const [touchStart, setTouchStart] = React.useState(currWidth);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    console.log(e.targetTouches[0].clientX);

    // if (e.targetTouches[0].clientY > 0) {
    //   setTouchStart(currWidth);
    // }

    if (e.targetTouches[0].clientX < 290) {
      setTouchStart(0);
    }
  };

  return (
    <SecondContainer
      onTouchMove={(e) => {
        handleTouchStart(e);
      }}
      touchStart={touchStart}
    >
      <h1>Hi, I Am Solution Page, swipe to go back.</h1>
    </SecondContainer>
  );
}

export default Second;
