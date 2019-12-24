import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingBackgroundStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: rgba(227, 227, 227, 0.6);
  z-index: 2;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const LoadingStyled = styled.div`
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid rgb(44, 44, 44);
  border-bottom: 0.5rem solid rgb(178, 178, 178);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  animation: ${rotate} 2s linear infinite;
`;
