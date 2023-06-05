import styled from "styled-components";

export const ProductTitle = styled.div``;

export const CardContainer = styled.div`
  background-image: url(${({ image }) => image});
  background-position: 80% 100%;
  width: 100%;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 8px #000;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 10px #000;
  }
`;
export const ProductInfoContainer = styled.div`
  background-color: white;
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;
