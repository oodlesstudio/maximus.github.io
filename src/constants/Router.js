import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import FileConfiguration from "../pages/FileConfiguration";
import BranchTerminalRegistration from "../pages/BranchTerminalRegistration";
import UnmatchedTxnsReport from "../pages/UnmatchedTxnsReport";
import FieldIdentificationConfig from "../pages/FieldIdentificationConfig";
import OnlineCbrEntry from "../pages/OnlineCbrEntry";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileConfiguration />} />
        <Route path="/branch-terminal-registration" element={<BranchTerminalRegistration />} />
        <Route path="/unmatched-txns-report" element={<UnmatchedTxnsReport />} />
        <Route
          path="/field-identification-config"
          element={<FieldIdentificationConfig />}
        />
        <Route path="/online-cbr-entry" element={<OnlineCbrEntry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
