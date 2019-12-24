import React, { useEffect, useState } from "react";
import { SidebarStyled, ListStyled, ButtonCategoriesStyled } from "./styles";
import { Store } from "../../store";
import chuckNorrisImg from "../../assets/chuck-norris.jpg";
import { Logo } from "../Logo";
import { mayIRender, CategoriesList } from "./helper";

function Sidebar() {
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
          <CategoriesList
            categories={categories}
            handleCategoryClick={handleCategoryClick}
            currentCategory={currentCategory}
          />
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
