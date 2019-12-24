import React, { useEffect, Fragment } from "react";
import { Store } from "../../store";
import {
  QuotesMainStyled,
  QuotesSectionStyled,
  QuotesAsideStyled,
  QuoteButtonStyled
} from "./styles";
import { capitalizeFLetter } from "../../utils/capitalize";

function Quotes(props) {
  const {
    rhkState,
    rhkActions,
    platformState,
    platformActions
  } = Store.useContainer();

  const { getCategoryQuote } = rhkActions;
  const { currentCategory, currentQuote } = rhkState;
  const { setIsLoading } = platformActions;
  const { isMobile } = platformState;

  async function getAQuote() {
    setIsLoading(true);
    await getCategoryQuote();
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) setIsLoading(false);
    return () => {
      mounted = false;
    };
  }, [currentQuote, setIsLoading]);

  useEffect(() => {
    let mounted = true;
    async function getData() {
      setIsLoading(true);
      await getCategoryQuote();
    }
    if (mounted && currentCategory) getData();
    return () => {
      mounted = false;
    };
  }, [currentCategory]);

  const mayIRender = string => typeof string === "string" && string.length > 0;

  return (
    <QuotesMainStyled direction="column" {...props}>
      {currentCategory && (
        <Fragment>
          <QuotesAsideStyled isMobile={isMobile} stick="left">
            <p>
              <strong>Current category:</strong>{" "}
              {capitalizeFLetter(currentCategory)}
            </p>
          </QuotesAsideStyled>
          <QuotesAsideStyled stick="right">
            <QuoteButtonStyled onClick={() => getAQuote()}>
              Get more!
            </QuoteButtonStyled>
          </QuotesAsideStyled>
        </Fragment>
      )}
      {mayIRender(currentQuote) && (
        <QuotesSectionStyled isMobile={isMobile} xGutter="2rem">
          {currentQuote}
        </QuotesSectionStyled>
      )}
    </QuotesMainStyled>
  );
}

export { Quotes };
