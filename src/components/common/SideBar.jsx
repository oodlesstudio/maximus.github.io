import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = (props) => {
  const path = useLocation().pathname;

  const activeLink = (href) => {
    if (href === path) {
      return {
        backgroundColor: "var(--color-secondary-light-defaut)"
      };
    } else {
      return {
      };
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* Home */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span class="icon-Icon-NameHome sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Home</span>
            </button>
          </h2>
        </div>

        {/* Client Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <span class="icon-Icon-NameClient-Management sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Client Management</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
                  <Link to="/branch-terminal-registration" style={activeLink("/branch-terminal-registration")}>
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
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
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span class="icon-Icon-NameUser-Management sidebarIconSize"></span>
              <span className="fontSize14 ms-2">User Management</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span class="icon-Icon-NameConfiguration sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Configuration</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/" style={activeLink("/")}>
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/field-identification-config" style={activeLink("/field-identification-config")}>
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
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
            </div>
          </div>
        </div>

        {/* Import Logs */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingFour">
            <button className="accordion-button collapsed" type="button">
              <span class="icon-Icon-NameImport-Logs sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Import Logs</span>
            </button>
          </h2>
        </div>

        {/* Run Recon */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingFive">
            <button className="accordion-button collapsed" type="button">
              <span class="icon-Icon-NameRun-Recon sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Run Recon</span>
            </button>
          </h2>
        </div>

        {/* Daily Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <span class="icon-Icon-NameDaily-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Daily Reports</span>
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/unmatched-txns-report" style={activeLink("/unmatched-txns-report")}>
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
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <span class="icon-Icon-NameMIS-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">MIS Reports</span>
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Dispence Summary Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Txns Count Summary Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Reason Wise Summary Report
                    </span>
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
                    <span className="subMenuRight">
                      Pending Acquirer Entry Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Tips & Surcharge Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Issuer Transaction TTUM Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Refund & Cashback TTUM Report
                    </span>
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
            </div>
          </div>
        </div>

        {/* Audit Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              <span class="icon-Icon-NameAudit-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Audit Reports</span>
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
            </div>
          </div>
        </div>

        {/* CBR */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <span class="icon-Icon-NameCBR sidebarIconSize"></span>
              <span className="fontSize14 ms-2">CBR</span>
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link
                    to="/online-cbr-entry"
                    style={activeLink("/online-cbr-entry")}
                  >
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
            </div>
          </div>
        </div>

        {/* Exception Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              <span class="icon-Icon-NameException-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Exception Reports</span>
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Duplicate Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      CBR Opening / Closeing Balance
                    </span>
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
            </div>
          </div>
        </div>

        {/* EOD Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              <span class="icon-Icon-NameEOD-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">EOD Reports</span>
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Day Wise ATM Status Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
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
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              <span class="icon-Icon-NameFraud-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Fraud Reports</span>
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
                    <span className="subMenuRight">
                      Frequent Reversal Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
                    </span>
                    <span className="subMenuRight">
                      Midnight Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span class="icon-Icon"></span>
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
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThirteen"
              aria-expanded="false"
              aria-controls="collapseThirteen"
            >
              <span class="icon-Icon-NameSearch sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Search</span>
            </button>
          </h2>
          <div
            id="collapseThirteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingThirteen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
