import React, { useState } from "react";
// Components
import SidebarMain from "./SidebarMain";
import MainWindow from "./MainWindow";

const MainView = () => {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  return (
    <div className="mainView w-100 d-flex">
      <SidebarMain />
      <MainWindow />
    </div>
  );
};

export default MainView;
