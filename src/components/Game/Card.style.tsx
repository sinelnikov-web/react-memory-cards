import styled from "styled-components";


export const Card = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s linear;
  cursor: pointer;
  font-size: 32px;

  &:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  }
  
  &.guessed {
    opacity: 0;
  }
  
  @media (max-width: 567px) {
    height: 0;
    padding-top: 100%;
    font-size: 16px;
  }
`

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  z-index: 2;
  backface-visibility: hidden;
  transition: all 0.3s ease;
  
  &.active {
    transform: rotateY(180deg);
  }
  
`

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: all 0.3s ease;
  &.active {
    transform: rotateY(360deg);
  }
`