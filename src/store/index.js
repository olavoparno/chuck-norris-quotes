import { createContainer } from "unstated-next";
import { RHKContainer } from "./containers/RHKContainer";
import { PlatformContainer } from "./containers/PlatformContainer";

const composeHooks = (...hooks) => () =>
  hooks.reduce((acc, hook) => ({ ...acc, ...hook() }), {});

const Store = createContainer(composeHooks(RHKContainer, PlatformContainer));

export { Store };
