import { useLocation } from "react-router-dom";
import Flag from "../components/Flag";
import { useEffect } from "react";

const FlagPage = () => {
  return (
    <div className="flag-wrapper">
      <Flag />
    </div>
  );
};

export default FlagPage;
