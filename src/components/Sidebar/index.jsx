import React, { useEffect, useState } from "react";
import {
  SidebarStyled,
  ListStyled,
  ListItemStyled,
  ButtonCategoriesStyled
} from "./styles";
import { Store } from "../../store";
import { capitalizeFLetter } from "../../utils/capitalize";
import chuckNorrisImg from "../../assets/chuck-norris.jpg";
import { Logo } from "../Logo";

function Sidebar(props) {
  const {
    rhkState,
    rhkActions,
    platformActions,
    platformState
  } = Store.useContainer();

  const { getCategories, setCurrentCategory } = rhkActions;
  const { categories, currentCategory } = rhkState;
  const { setIsLoading } = platformActions;
  const { isMobile } = platformState;

  const [sidebarAside, setSidebarAside] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) setIsLoading(false);
    return () => {
      mounted = false;
    };
  }, [categories, setIsLoading]);

  useEffect(() => {
    let mounted = true;
    async function getData() {
      setIsLoading(true);
      await getCategories();
    }
    if (mounted) getData();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!isMobile) {
      if (mounted) setSidebarAside(false);
    }
    return () => {
      mounted = false;
    };
  }, [isMobile]);

  function handleCategoryClick(e) {
    e.persist();
    const selectedCategory = e.target.id;
    setCurrentCategory(selectedCategory);

    if (isMobile) {
      setSidebarAside(true);
    }
  }

  function CategoriesList() {
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

  const mayIRender = array => Array.isArray(array) && array.length > 0;

  return (
    mayIRender(categories) && (
      <SidebarStyled
        align="flex-start"
        justify="flex-start"
        isMobile={isMobile}
        sidebarAside={sidebarAside}
      >
        <Logo
          isMobile={isMobile}
          width="100px"
          height="100px"
          src={chuckNorrisImg}
          alt="logo-image"
        />
        <ListStyled isMobile={isMobile} direction="column" xGutter="0rem">
          <CategoriesList />
        </ListStyled>
        {sidebarAside && (
          <ButtonCategoriesStyled onClick={() => setSidebarAside(false)}>
            show categories
          </ButtonCategoriesStyled>
        )}
      </SidebarStyled>
    )
  );
}

export { Sidebar };
