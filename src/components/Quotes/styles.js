import styled, { css } from "styled-components";
import {
  BaseFlexCss,
  AnimationFadeIn,
  ButtonSlideEffect
} from "../../utils/baseStyles";

export const QuotesMainStyled = styled.main`
  ${BaseFlexCss};
  position: relative;
  width: 100%;
  height: 100%;
`;

export const QuotesSectionStyled = styled.section`
  ${BaseFlexCss};
  position: relative;
  opacity: 1;
  animation-name: ${AnimationFadeIn};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
  font-size: 1.5rem;
  padding-left: 3rem;
  max-height: 55%;
`;

export const QuotesAsideStyled = styled.aside`
  position: absolute;
  top: 0%;
  margin: 1rem 1rem 0.5rem;
  ${({ stick }) => stick || "right"}: 0;
  ${({ isMobile, stick }) =>
    isMobile && stick === "left"
      ? css`
          top: 12%;
          margin: 2rem 0;
          right: 0;
          text-align: right;
        `
      : css`
          text-align: right;
          ${QuoteButtonStyled} {
            margin: 0.5rem 0;
          }
        `}
  p {
    margin: 1rem;
  }
`;

export const QuoteButtonStyled = styled.button`
  ${ButtonSlideEffect};
  background-color: transparent;
  border-style: none;
  border-radius: 2px;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 0px 1px 2px rgba(179, 179, 179, 0.5);
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  position: relative;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 1.2rem;
  &:hover {
    border-left: none;
  }
`;
