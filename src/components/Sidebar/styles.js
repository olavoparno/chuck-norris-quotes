import styled, { css } from "styled-components";
import {
  BaseFlexCss,
  BaseSpacingCss,
  AnimationFadeIn,
  ButtonSlideEffect
} from "../../utils/baseStyles";

export const SidebarStyled = styled.nav`
  ${BaseFlexCss}
  width: 30%;
  min-width: ${({ isMobile }) => (isMobile ? "100%" : "5%")};
  height: 100%;
  ${({ sidebarAside }) =>
    sidebarAside &&
    css`
      width: 2%;
      min-width: 2%;
      box-shadow: none;
      ul {
        width: 2%;
        min-width: 2%;
        li {
          overflow: hidden;
          pointer-events: none;
        }
      }
    `}
`;

export const ListStyled = styled.ul`
  ${BaseFlexCss};
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: 2px solid black;
  transition: width 0.2s ease-out;
  opacity: 1;
  animation-name: ${AnimationFadeIn};
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.5s;
  ${({ isMobile }) =>
    isMobile
      ? css`
          &:hover {
            li {
              color: #000;
            }
          }
          li {
            color: #000;
            &:hover {
              color: #fff;
            }
          }
          li:before {
            content: "";
            position: relative;
            padding: 1rem 0.5rem;
          }
        `
      : null}
`;

export const ListItemStyled = styled.li`
  ${BaseSpacingCss};
  flex-grow: 1;
  list-style-type: none;
  box-shadow: 0 0.5px 0 0 #ffffff inset,
    1px 1px 2px 1px rgba(179, 179, 179, 0.5);
  cursor: pointer;
  user-select: none;
  border-left: 5px solid;
  ${({ active }) =>
    active
      ? css`
          font-weight: 700;
          background-color: rgba(255, 237, 255, 0.8);
          border-left: 5px solid rgba(70, 139, 185, 0.8);
        `
      : null}
  width: 100%;
  position: relative;
  text-decoration: none;
  color: #444;
  box-sizing: border-box;
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
    background: rgba(138, 152, 162, 0.8);
  }
`;

export const ButtonCategoriesStyled = styled.button`
  ${ButtonSlideEffect};
  background-color: transparent;
  border-style: none;
  border-radius: 2px;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 0px 1px 2px rgba(179, 179, 179, 0.5);
  padding: 0.1rem 0rem;
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  font-size: 1rem;
  right: 0;
  top: 5.5rem;
  width: 5rem;
  margin: 0 1rem;
  z-index: 1;
  &:hover {
    border-left: none;
  }
`;
