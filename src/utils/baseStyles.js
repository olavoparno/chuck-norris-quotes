import { css, keyframes } from "styled-components";

export const BaseSpacingCss = css`
  margin-right: ${({ offsetRight }) => (offsetRight ? offsetRight : null)};
  margin-left: ${({ offsetLeft }) => (offsetLeft ? offsetLeft : null)};
  ${({ yGutter }) =>
    yGutter
      ? css`
          padding-top: ${yGutter};
          padding-bottom: ${yGutter};
        `
      : null}
  ${({ xGutter }) =>
    xGutter
      ? css`
          padding-left: ${xGutter};
          padding-right: ${xGutter};
        `
      : null}
`;

export const BaseFlexCss = css`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  ${BaseSpacingCss}
`;

export const AnimationFadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const ButtonSlideEffect = css`
  &:hover {
    border-bottom: 0px;
    color: #fff;
    border-left: 10px solid rgba(63, 110, 141, 0.8);
  }
  &:after {
    content: "";
    height: 100%;
    left: 0;
    top: 0;
    width: 0px;
    position: absolute;
    transition: all 0.3s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
    z-index: -1;
  }
  &:hover:after {
    width: 100%;
  }
  &:after {
    content: "";
    background: rgba(138, 152, 162, 0.8);
    height: 100%;
    left: 0;
    top: 0;
    width: 0px;
    position: absolute;
    transition: all 0.3s ease 0s;
    z-index: -1;
  }
`;
