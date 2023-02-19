import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { localStorageGet, localStorageSet } from "../utils/localStorage";

const Redirector = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const lastUrl = localStorageGet("lastUrl", "/");
    console.log("lastUrl", lastUrl);
    navigate(lastUrl);

    return () => {
      //   localStorageSet("lastUrl", pathname);
    };
  }, []);

  return null;
};

export default Redirector;
