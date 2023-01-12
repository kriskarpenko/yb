import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlagPage from "../pages/Flag";
import InfoPage from "../pages/Info";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<FlagPage />} />
        <Route path="info/:id" element={<InfoPage />} />
        <Route path="*" element={<FlagPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
