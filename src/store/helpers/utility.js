import { detailedDiff } from "deep-object-diff";

function padLeft(str, length, padding) {
  let strReturn = str;
  for (let i = 0, l = length - String(strReturn).length; i < l; i += 1) {
    strReturn = `${padding}${str}`;
  }

  return strReturn;
}

export function isEmpty(obj) {
  if (typeof obj !== "undefined") {
    return Object.entries(obj).length === 0;
  }
  return false;
}

export function consoleManager() {
  const createGroup = console.group.bind(console);
  const endGroup = console.groupEnd.bind(console);
  const logMsg = console.log;
  return {
    createGroup,
    endGroup,
    logMsg
  };
}

export function getTimeStamp() {
  const date = new Date();
  const timestamp = `[${padLeft(date.getHours(), 2, 0)}:${padLeft(
    date.getMinutes(),
    2,
    0
  )}:${padLeft(date.getSeconds(), 2, 0)}.${padLeft(
    date.getMilliseconds(),
    3,
    0
  )}]`;

  return timestamp;
}

export { detailedDiff };
