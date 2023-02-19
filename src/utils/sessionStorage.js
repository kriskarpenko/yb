import {
  genericStorageDelete,
  genericStorageGet,
  genericStorageSet,
} from "./genericStorage";

/**
 * Smartly reads value from sessionStorage
 */
export const sessionStorageGet = (name, defaultValue = "") =>
  genericStorageGet(sessionStorage, name, defaultValue);

/**
 * Smartly writes value into sessionStorage
 */
export const sessionStorageSet = (name, value) =>
  genericStorageSet(sessionStorage, name, value);

/**
 * Deletes value by name from sessionStorage, if specified name is empty the sessionStorage is cleared.
 */
export const sessionStorageDelete = (name) =>
  genericStorageDelete(sessionStorage, name);
