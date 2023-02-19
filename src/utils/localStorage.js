import {
  //   GenericStorage,
  genericStorageDelete,
  genericStorageGet,
  genericStorageSet,
} from "./genericStorage";

/**
 * Smartly reads value from localStorage
 */
export const localStorageGet = (name, defaultValue = "") =>
  genericStorageGet(localStorage, name, defaultValue);

/**
 * Smartly writes value into localStorage
 */
export const localStorageSet = (name, value) =>
  genericStorageSet(localStorage, name, value);

/**
 * Deletes value by name from localStorage, if specified name is empty the localStorage is cleared.
 */
export const localStorageDelete = (name) =>
  genericStorageDelete(localStorage, name);

// const STORAGE = new GenericStorage(localStorage);

// export const localStorageGet2 = (name, defaultValue) => {
//   STORAGE.get(name, defaultValue);
// };

// export const localStorageSet2 = (name, value) => {
//   STORAGE.set(name, value);
// };

// export const localStorageDelete2 = (name) => {
//   STORAGE.delete(name);
// };
