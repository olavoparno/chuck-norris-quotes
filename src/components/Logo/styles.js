import styled from "styled-components";

export const LogoDivStyled = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  align-self: ${({ isMobile }) => (isMobile ? "flex-start" : "center")};
  padding: 1rem;
`;

export const LogoImgStyled = styled.img`
  width: 100%;
  height: 100%;
`;
