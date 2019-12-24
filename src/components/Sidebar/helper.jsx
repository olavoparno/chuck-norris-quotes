import React from "react";
import { ListItemStyled } from "./styles";
import { capitalizeFLetter } from "../../utils/capitalize";

export function CategoriesList({
  categories,
  currentCategory,
  handleCategoryClick
}) {
  return categories.map(item => {
    return (
      <ListItemStyled
        key={item}
        id={item}
        yGutter="1rem"
        xGutter="1rem"
        active={item === currentCategory}
        onClick={handleCategoryClick}
      >
        {capitalizeFLetter(item)}
      </ListItemStyled>
    );
  });
}

export const mayIRender = array => Array.isArray(array) && array.length > 0;
