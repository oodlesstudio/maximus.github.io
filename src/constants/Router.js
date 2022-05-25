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
        <Route path="/client-management/branch-terminal-registration" element={<BranchTerminalRegistration />} />
        <Route path="/daily-report/unmatched-txns-report" element={<UnmatchedTxnsReport />} />
        <Route
          path="/configuration/field-identification-config"
          element={<FieldIdentificationConfig />}
        />
        <Route path="/configuration/file-configuration" element={<FileConfiguration />} />
        <Route path="/cbr/online-cbr-entry" element={<OnlineCbrEntry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
