import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: rgb(92, 141, 247);
    height: 35px;
    width: 35px;
    align-items: center;
    justify-items: center;
    color: white;
    border-radius: 5px;
    border: 0;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: rgb(64, 118, 234);
    }

    &:active {
      border: 3px solid #53a653;
    }
    &:disabled {
      background-color: rgba(92, 141, 247, 0.494);
    }
  }

  .label {
    width: 40px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
`;
