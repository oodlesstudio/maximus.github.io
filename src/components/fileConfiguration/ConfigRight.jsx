import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ConfigRight = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="configRight">
      {/* Config Left Top */}
      <div className="configLeftTop">
        <div className="configRightHead d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center">
            <Link to="/">
              <p className="fontSize12 colorPrimaryDefault">Home</p>
            </Link>
            <span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1"
              >
                <path
                  d="M3 4L7 8L3 12"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="breadcrumbIcon"
                />
              </svg>
            </span>
            <Link to="/">
              <p className="fontSize12 colorPrimaryDefault">Configuration</p>
            </Link>
            <span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1"
              >
                <path
                  d="M3 4L7 8L3 12"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="breadcrumbIcon"
                />
              </svg>
            </span>
            <Link to="/">
              <p className="fontSize12">File Configuration</p>
            </Link>
          </div>
        </div>

        <div className="lightBlueBox configTopBlueBoxRight">
          <div className="d-flex mb-3">
            <div className="configDotLeftContent fontSize14">Client Name</div>
            <div className="configDotCenterContent fontSize14">:</div>
            <div className="configDotRightContent fontSize14-m">
              Sri Vasavamba Cooperative Urban Bank Ltd
            </div>
          </div>

          <div className="d-flex mb-3">
            <div className="configDotLeftContent fontSize14">Format No.</div>
            <div className="configDotCenterContent fontSize14">:</div>
            <div className="configDotRightContent fontSize14-m">1</div>
          </div>

          <div className="d-flex mb-3">
            <div className="configDotLeftContent fontSize14">Format Type</div>
            <div className="configDotCenterContent fontSize14">:</div>
            <div className="configDotRightContent fontSize14-m">Current</div>
          </div>

          <div className="d-flex">
            <div className="configDotLeftContent fontSize14">
              Format set to other client
            </div>
            <div className="configDotCenterContent fontSize14 d-flex align-items-center">
              :
            </div>
            <div className="configDotRightContent">
              <div className="clientNameSelect">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="clientName"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="configBottomHeadingBox"></div>

      {/* Config Left Bottom */}
      <div className="configLeftBottom pb-3">
        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
              />
            </div>

            <div>
              <button type="button" className="iconButtonBox ms-2">
                <img src={Pdf} alt="Pdf" />
              </button>
              <button type="button" className="iconButtonBox ms-2">
                <img src={Excel} alt="Excel" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table table-striped table-hover table-borderless align-middle configTableRight">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "30%" }}>
                    Field Name
                  </th>
                  <th scope="col">Start Position</th>
                  <th scope="col">Field Length</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="paginationBox d-flex align-items-center justify-content-between my-4">
            <div className="paginationLeft fontSize12">
              Showing 1 to 10 of 49 entries
            </div>

            <div className="paginationRight">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link previousPagination" href="/" aria-label="Previous">
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 2.6665L4.66667 7.99984L10 13.3332"
                            stroke="#003087"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span>First</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link paginationBottom" href="/">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link nextPagination" href="/" aria-label="Next">
                      <span>Last</span>
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 13.3335L11.3333 8.00016L6 2.66683"
                            stroke="#003087"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigRight;
