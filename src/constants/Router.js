import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Configuration from "../pages/Configuration";
import BranchRegistration from "../pages/BranchRegistration";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Configuration />} />
        <Route path="/branch-registration" element={<BranchRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
