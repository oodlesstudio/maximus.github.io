import React from "react";
// Components
import ConfigLeft from "../fileConfiguration/ConfigLeft";
import ConfigRight from "../fileConfiguration/ConfigRight";

const MainWindow = () => {
  return (
    <div className="mainWindow configMainContent d-flex justify-content-between">
      <ConfigLeft />
      <ConfigRight />
    </div>
  );
};

export default MainWindow;
