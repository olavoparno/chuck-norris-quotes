import { isEmpty, getTimeStamp, consoleManager } from "./utility";

export const logEntries = (name, state, prevState, object) => {
  const timestamp = getTimeStamp();
  const { createGroup, endGroup, logMsg } = consoleManager();

  const { added, updated, deleted } = object;

  createGroup(`${name} ${timestamp}`);

  if (!isEmpty(added)) {
    logMsg("Added\n ", added);
  }

  if (!isEmpty(updated)) {
    logMsg("Updated\n ", updated);
  }

  if (!isEmpty(deleted)) {
    logMsg("Deleted\n ", deleted);
  }

  if (added || updated || deleted) {
    logMsg("New state\n ", state);
    logMsg("Old state\n ", prevState);
  }

  endGroup();
};
