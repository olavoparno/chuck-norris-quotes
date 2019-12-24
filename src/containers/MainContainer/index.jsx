import React, { Fragment } from "react";
import { Loading } from "../../components/Loading";
import { MainContainerStyled } from "./styles";
import { Store } from "../../store";

function MainContainer(props) {
  const { platformState } = Store.useContainer();
  const { isLoading } = platformState;

  return (
    <Fragment>
      {isLoading && <Loading />}
      <MainContainerStyled {...props} />
    </Fragment>
  );
}

export { MainContainer };
