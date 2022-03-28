import React from "react";
import { Link } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">File Configuration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Field Identification Config</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Matching Rule Config</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Force Sattlement</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">
              Force Sattlement Rule Configuration
            </span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const SidebarSmall = (props) => {
  return (
    <div className="sidebarSmall">
      {/* Home */}
      <div className="sidebarSmallImg">
        <span class="icon-Icon-NameHome"></span>
      </div>

      {/* Client Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameClient-Management"></span>
        </OverlayTrigger>
      </div>

      {/* User Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameUser-Management"></span>
        </OverlayTrigger>
      </div>

      {/* Configuration */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameConfiguration"></span>
        </OverlayTrigger>
      </div>

      {/* Import Logs */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameImport-Logs"></span>
        </OverlayTrigger>
      </div>

      {/* Run Recon */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameRun-Recon"></span>
        </OverlayTrigger>
      </div>

      {/* Daily Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameDaily-Reports"></span>
        </OverlayTrigger>
      </div>

      {/* MIS Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameMIS-Reports"></span>
        </OverlayTrigger>
      </div>

      {/* Audit Reports */}

      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameAudit-Reports"></span>
        </OverlayTrigger>
      </div>

      {/* CBR */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameCBR"></span>
        </OverlayTrigger>
      </div>

      {/* Exception Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameException-Reports"></span>
        </OverlayTrigger>
      </div>

      {/* EOD Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameEOD-Reports"></span>
        </OverlayTrigger>
      </div>

      {/* Fraud Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameFraud-Reports"></span>
        </OverlayTrigger>
      </div>

      {/* Search */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          rootClose
        >
          <span class="icon-Icon-NameSearch"></span>
        </OverlayTrigger>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
