import React from "react";
import { useDispatch, useSelector } from 'react-redux'
// Components
import ConfigLeft from "../fileConfiguration/ConfigLeft";
import ConfigRight from "../fileConfiguration/ConfigRight";

const MainWindow = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer
  });

  return (
    <div className={company.sidebarOpen?'mainWindow configMainContent d-flex justify-content-between sidebarClosed':'mainWindow configMainContent d-flex justify-content-between sidebarOpened'}>
      <ConfigLeft />
      <ConfigRight />
    </div>
  );
};

export default MainWindow;
