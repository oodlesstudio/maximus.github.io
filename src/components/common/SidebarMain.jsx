import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import SidebarSmall from "./SidebarSmall";
import { openSidebar } from "../../constants/actions/sidebarAction";

const SidebarMain = () => {
  const [navStatus, setNavStatus] = useState(false);
  const company = useSelector((state) => ({
    ...state,
  }));
  const dispatch = useDispatch()

  function buttonCollapse() {
    setNavStatus(!navStatus);
    dispatch(openSidebar(navStatus))
    console.log(company, navStatus)
  }
  return (
    <>
      {navStatus ? (
        <SideBar buttonCollapse={buttonCollapse} />
      ) : (
        <SidebarSmall buttonCollapse={buttonCollapse} />
      )}
    </>
  );
};

export default SidebarMain;
