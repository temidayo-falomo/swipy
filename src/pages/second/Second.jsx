import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SecondContainer } from "./Second.styled";

function Second() {
  let navigate = useNavigate();
  const [touchStart, setTouchStart] = React.useState(false);

  //When TouchStart is true, navigate backwards.
  useEffect(() => {
    if (touchStart) {
      navigate("/");
    }
  }, [touchStart]);

  return (
    <SecondContainer
      onTouchMove={(e) => {
        //Touchstart is set to true using DOM "onTouchMove"
        setTouchStart(true);
      }}
    >
      <h1>Hi, I Am Solution Page, swipe to go back.</h1>
    </SecondContainer>
  );
}

export default Second;
