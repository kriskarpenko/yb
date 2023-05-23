import { usePersistentContext } from "./PersistentContext";
import { useCallback } from "react";

const PersistentEditor = () => {
  const { value, setValue } = usePersistentContext();

  const onChange = useCallback(
    (event) => {
      setValue((oldValue) => event?.target?.value ?? oldValue);
    },
    [setValue]
  );

  console.log("rendered:", value);

  return <input value={value} onChange={onChange} />;
};

export default PersistentEditor;
