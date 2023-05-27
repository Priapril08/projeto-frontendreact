import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

`;
export const Container = styled.div`
  background: #ffb3c655;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 20px;

  height: ${({ height = "100%" }) => height};
  justify-content: ${({ justify = "flex-start" }) => justify};
  width: ${({ width = "100%" }) => width};
  flex-direction: ${({ direction = "row" }) => direction};
`;
export const GridContainer = styled.div`
  overflow: auto;
  display: grid;
  padding: 30px;
  padding-bottom: 50px;
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;

  height: ${({ height = "100%" }) => height};
  width: ${({ width = "100%" }) => width};
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #da627d;
    border-radius: 20px;
    border: 3px solid transparent;
  }
`;
