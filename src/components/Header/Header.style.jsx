import styled from "styled-components";


export const HeaderWrapper = styled.header`
  font-size: 50px;
  color: white;

  @media (max-width: 567px) {
    font-size: 25px;
    
    & button {
      font-size: 15px;
      padding: 10px 20px;
    }
  }
`

export const HeaderInner = styled.header`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`