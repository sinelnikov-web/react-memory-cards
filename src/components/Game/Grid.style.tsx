import styled from "styled-components";


export const Grid = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
  
  @media (max-width: 997px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const CenteredGrid = styled.div`
  display: grid;
  margin-top: 200px;
  
  h1 {
    align-self: center;
    justify-self: center;
  }
`