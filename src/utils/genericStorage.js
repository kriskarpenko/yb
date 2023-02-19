/**
 * Smartly reads value from Specific Storage
 */
export function genericStorageGet(storage, name, defaultValue = "") {
  const valueFromStore = storage?.getItem(name);
  if (valueFromStore === null) return defaultValue; // No value in store, return default one

  try {
    const jsonParsed = JSON.parse(valueFromStore);
    if (
      ["boolean", "number", "bigint", "string", "object"].includes(
        typeof jsonParsed
      )
    ) {
      return jsonParsed; // We successfully parse JS value from the store
    }
  } catch (error) {
    // do nothing
  }

  return valueFromStore; // Return string value as it is
}

/**
 * Smartly writes value into Specific Storage
 */
export function genericStorageSet(storage, name, value) {
  if (typeof value === "undefined") {
    return; // Do not store undefined values
  }

  let valueAsString;
  if (typeof value === "object") {
    valueAsString = JSON.stringify(value);
  } else {
    valueAsString = String(value);
  }

  storage?.setItem(name, valueAsString);
}

/**
 * Deletes value by name from Specific Storage, if specified name is empty the Specific Storage is cleared.
 */
export function genericStorageDelete(storage, name) {
  if (name) {
    storage?.removeItem(name);
  } else {
    storage?.clear();
  }
}

export class GenericStorage {
  constructor(specificStorage) {
    this.storage = specificStorage ?? {};
  }

  get(name, defaultValue) {
    return genericStorageGet(this.storage, name, defaultValue);
  }

  set(name, value) {
    genericStorageSet(this.storage, name, value);
  }

  delete(name) {
    genericStorageDelete(this.storage, name);
  }

  clear() {
    genericStorageDelete(this.storage, "");
  }
}

class LocalStorage extends GenericStorage {
  constructor() {
    super(localStorage);
  }
}

class SessionStorage extends GenericStorage {
  constructor() {
    super(sessionStorage);
  }
  //   get(...params) {
  //     super.get(...params);
  //   }
  //   set(...params) {
  //     super.set(...params);
  //   }
  //   delete(...params) {
  //     super.delete(...params);
  //   }
}
