import styled from "styled-components";

export const SecondContainer = styled.div`
  height: 100vh;
  background-color: goldenrod;
  color: #fff;
  display: grid;
  place-content: center;
  width: ${(props) => props.touchStart + "px"};
  position: absolute;
  overflow: hidden;

  h1 {
    padding: 20px;
    text-align: center;
  }
`;
