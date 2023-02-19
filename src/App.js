import { useState } from "react";
import AppRoutes from "./routes";
import { localStorageGet, localStorageSet } from "./utils/localStorage";

function App() {
  const [count, setCount] = useState(0);
  const darkMode = localStorageGet("darkMode");
  console.log("darkMode", Boolean(darkMode));
  const className = darkMode ? "dark" : "light";

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (
      // (event.ctrlKey || event.metaKey) &&
      event.keyCode === 32
    ) {
      const darkMode = localStorageGet("darkMode");
      localStorageSet("darkMode", !darkMode);
      setCount(count + 1);
    }
  };

  return (
    <div className={className} contentEditable>
      <input onKeyDown={handleKeyDown} value={count} />
      <AppRoutes />
    </div>
  );
}

export default App;
