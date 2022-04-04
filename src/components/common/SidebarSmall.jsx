import React from "react";
import { Link } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

const clientManagement = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Currency Registration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Vendor Registration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Client Registration</span>
          </Link>
        </li>
        <li>
          <Link to="/branch-terminal-registration">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Branch/Terminal Registration</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const userManagement = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Role Creation</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">User Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Change Password</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const configuration = (
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
          <Link to="/field-identification-config">
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

const dailyReports = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/unmatched-txns-report">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Unmatched Txns Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Matched Txns Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Reversal Txns Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Successful Amount Count Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const misReports = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Dispence Summary Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Txns Count Summary Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Reason Wise Summary Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">TTUM Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">POS TTUM Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Pending Acquirer Entry Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Tips & Surcharge Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Issuer Transaction TTUM Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Refund & Cashback TTUM Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">IMPS TTUM Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const auditReports = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Sattled Txns Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">ATM Charges Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Bank Sattlement Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">POS Sattlement Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Refund Txns Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">IMPS Sattlement Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">UPI Sattlement Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">NPCI Bulk Upload</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const cbr = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/online-cbr-entry">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Online CBR Entry</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">CBR Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">C3R Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const exceptionReports = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Duplicate Transaction Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">CBR Opening / Closeing Balance</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">CBR vs EJ Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">EJ Transaction Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const eodReports = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Day Wise ATM Status Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Terminal Wise Status Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const fraudReports = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">
              Multiple Txn With Same Terminal
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">
              Multiple Txn with Diff. Terminal
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Frequent Reversal Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Midnight Transaction Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">High Value Transaction Reports</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const search = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon"></span>
            </span>
            <span className="subMenuRight">Search By RRN</span>
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
        <span class="icon-Icon-NameHome sidebarIconSize"></span>
      </div>

      {/* Client Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={clientManagement}
          rootClose
        >
          <span class="icon-Icon-NameClient-Management sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* User Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={userManagement}
          rootClose
        >
          <span class="icon-Icon-NameUser-Management sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Configuration */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={configuration}
          rootClose
        >
          <span class="icon-Icon-NameConfiguration sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Import Logs */}
      <div className="sidebarSmallImg">
        <span class="icon-Icon-NameImport-Logs sidebarIconSize"></span>
      </div>

      {/* Run Recon */}
      <div className="sidebarSmallImg">
        <span class="icon-Icon-NameRun-Recon sidebarIconSize"></span>
      </div>

      {/* Daily Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dailyReports}
          rootClose
        >
          <span class="icon-Icon-NameDaily-Reports sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* MIS Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={misReports}
          rootClose
        >
          <span class="icon-Icon-NameMIS-Reports sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Audit Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={auditReports}
          rootClose
        >
          <span class="icon-Icon-NameAudit-Reports sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* CBR */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={cbr}
          rootClose
        >
          <span class="icon-Icon-NameCBR sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Exception Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={exceptionReports}
          rootClose
        >
          <span class="icon-Icon-NameException-Reports sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* EOD Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={eodReports}
          rootClose
        >
          <span class="icon-Icon-NameEOD-Reports sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Fraud Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={fraudReports}
          rootClose
        >
          <span class="icon-Icon-NameFraud-Reports sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Search */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={search}
          rootClose
        >
          <span class="icon-Icon-NameSearch sidebarIconSize"></span>
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
