import React, { useState } from "react";
// Components
import SideBar from "./SideBar";
import SidebarSmall from "./SidebarSmall";
import MainWindow from "./MainWindow";

const MainView = () => {
  const [navStatus, setNavStatus] = useState(false);

  function buttonCollapse() {
    setNavStatus(!navStatus);
  }
  return (
    <div className="mainView d-flex">
      {navStatus ? (
        <SideBar buttonCollapse={buttonCollapse} />
      ) : (
        <SidebarSmall buttonCollapse={buttonCollapse} />
      )}

      <MainWindow />
    </div>
  );
};

export default MainView;
