import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Configuration from "../pages/Configuration";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
