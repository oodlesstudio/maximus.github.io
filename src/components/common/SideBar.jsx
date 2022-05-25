import React from "react";
import { Link, useLocation, matchPath, useNavigate } from "react-router-dom";

const SideBar = (props) => {
  let path = useLocation().pathname;
  let navigate = useNavigate();

  // client-management Path
  let clientManagementPath = matchPath("/client-management/*", path);
  if (clientManagementPath) {
    clientManagementPath = clientManagementPath.pathnameBase;
  }
  // dailyReport Path
  let dailyReportPath = matchPath("/daily-report/*", path);
  if (dailyReportPath) {
    dailyReportPath = dailyReportPath.pathnameBase;
  }
  // /configuration Path
  let configurationPath = matchPath("/configuration/*", path);
  if (configurationPath) {
    configurationPath = configurationPath.pathnameBase;
  }
  // cbr Path
  let cbrPath = matchPath("/cbr/*", path);
  if (cbrPath) {
    cbrPath = cbrPath.pathnameBase;
  }

  // path redirects
  if (path === "/") {
    navigate("/configuration/file-configuration");
  }

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    }
    if (arr === clientManagementPath) {
      return "accordion-button";
    }
    if (arr === dailyReportPath) {
      return "accordion-button";
    }
    if (arr === configurationPath) {
      return "accordion-button";
    }
    if (arr === cbrPath) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    }
    if (arr === clientManagementPath) {
      return "true";
    }
    if (arr === dailyReportPath) {
      return "true";
    }
    if (arr === configurationPath) {
      return "true";
    }
    if (arr === cbrPath) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    }
    if (arr === clientManagementPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === dailyReportPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === configurationPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === cbrPath) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* Home */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span className="icon-Icon-NameHome sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Home</span>
            </button>
          </h2>
        </div>

        {/* Client Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={activeBtnClass("/client-management")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded={activeAriaExpand("/client-management")}
              aria-controls="collapseOne"
            >
              <span className="icon-Icon-NameClient-Management sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Client Management</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={activeAccordionBodyClass("/client-management")}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Currency Registration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Vendor Registration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Client Registration</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/client-management/branch-terminal-registration"
                    className={activeLink(
                      "/client-management/branch-terminal-registration"
                    )}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Branch/Terminal Registration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseTwo"
            >
              <span className="icon-Icon-NameUser-Management sidebarIconSize"></span>
              <span className="fontSize14 ms-2">User Management</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Role Creation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">User Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Change Password</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={activeBtnClass("/configuration")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded={activeAriaExpand("/configuration")}
              aria-controls="collapseThree"
            >
              <span className="icon-Icon-NameConfiguration sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Configuration</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className={activeAccordionBodyClass("/configuration")}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link
                    to="/configuration/file-configuration"
                    className={activeLink("/configuration/file-configuration")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/configuration/field-identification-config"
                    className={activeLink(
                      "/configuration/field-identification-config"
                    )}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Import Logs */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingFour">
            <button className="accordion-button collapsed" type="button">
              <span className="icon-Icon-NameImport-Logs sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Import Logs</span>
            </button>
          </h2>
        </div>

        {/* Run Recon */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingFive">
            <button className="accordion-button collapsed" type="button">
              <span className="icon-Icon-NameRun-Recon sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Run Recon</span>
            </button>
          </h2>
        </div>

        {/* Daily Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className={activeBtnClass("/daily-report")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded={activeAriaExpand("/daily-report")}
              aria-controls="collapseSix"
            >
              <span className="icon-Icon-NameDaily-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Daily Reports</span>
            </button>
          </h2>
          <div
            id="collapseSix"
            className={activeAccordionBodyClass("/daily-report")}
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link
                    to="/daily-report/unmatched-txns-report"
                    className={activeLink(
                      "/daily-report/unmatched-txns-report"
                    )}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Unmatched Txns Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Matched Txns Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Reversal Txns Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Successful Amount Count Report
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIS Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseSeven"
            >
              <span className="icon-Icon-NameMIS-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">MIS Reports</span>
            </button>
          </h2>
          <div
            id="collapseSeven"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Dispence Summary Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Txns Count Summary Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Reason Wise Summary Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">TTUM Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">POS TTUM Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Pending Acquirer Entry Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Tips & Surcharge Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Issuer Transaction TTUM Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Refund & Cashback TTUM Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">IMPS TTUM Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Audit Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseEight"
            >
              <span className="icon-Icon-NameAudit-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Audit Reports</span>
            </button>
          </h2>
          <div
            id="collapseEight"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Sattled Txns Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">ATM Charges Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Bank Sattlement Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">POS Sattlement Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Refund Txns Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">IMPS Sattlement Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">UPI Sattlement Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">NPCI Bulk Upload</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CBR */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className={activeBtnClass("/cbr")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded={activeAriaExpand("/cbr")}
              aria-controls="collapseNine"
            >
              <span className="icon-Icon-NameCBR sidebarIconSize"></span>
              <span className="fontSize14 ms-2">CBR</span>
            </button>
          </h2>
          <div
            id="collapseNine"
            className={activeAccordionBodyClass("/cbr")}
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link
                    to="/cbr/online-cbr-entry"
                    className={activeLink("/cbr/online-cbr-entry")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Online CBR Entry</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">CBR Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">C3R Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exception Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseTen"
            >
              <span className="icon-Icon-NameException-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Exception Reports</span>
            </button>
          </h2>
          <div
            id="collapseTen"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Duplicate Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      CBR Opening / Closeing Balance
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">CBR vs EJ Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">EJ Transaction Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* EOD Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseEleven"
            >
              <span className="icon-Icon-NameEOD-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">EOD Reports</span>
            </button>
          </h2>
          <div
            id="collapseEleven"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingEleven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Day Wise ATM Status Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Terminal Wise Status Report
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fraud Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwelve">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseTwelve"
            >
              <span className="icon-Icon-NameFraud-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Fraud Reports</span>
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingTwelve"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Multiple Txn With Same Terminal
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Multiple Txn with Diff. Terminal
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Frequent Reversal Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Midnight Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      High Value Transaction Reports
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThirteen">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThirteen"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseThirteen"
            >
              <span className="icon-Icon-NameSearch sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Search</span>
            </button>
          </h2>
          <div
            id="collapseThirteen"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingThirteen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">Search By RRN</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
