import { createContext, useContext, useState } from "react";

const defaultContextValue = { value: "default", setValue: () => undefined };
const InternalContext = createContext(defaultContextValue);

export const usePersistentContext = () => useContext(InternalContext);

const PersistentContext = ({ children, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue);
  const contextValue = { value, setValue };

  return (
    <InternalContext.Provider value={contextValue}>
      {children}
    </InternalContext.Provider>
  );
};

export const withPersistentContext = (Component) => (props) => {
  const { value, setValue } = usePersistentContext();

  return <Component {...props} persistentContext={{ value, setValue }} />;
};

export default PersistentContext;
