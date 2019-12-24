import React from "react";
import { LogoImgStyled, LogoDivStyled } from "./styles";

function Logo({ isMobile, width, height, src, alt = "Image", props }) {
  return (
    <LogoDivStyled isMobile={isMobile} width={width} height={height}>
      <LogoImgStyled src={src} alt={alt} {...props} />
    </LogoDivStyled>
  );
}

export { Logo };
