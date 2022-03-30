import React, { useState } from "react";
import Select from "react-select";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
import ErrorGif from "../../images/common/errorGif.gif";
import SuccessGif from "../../images/common/successGif.gif";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const ConfigTableLeftEntries = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const ConfigLeft = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  const [showFilters, setShowFilters] = useState(false);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  return (
    <div className="configLeft">
      {/* Config Left Top */}
      <div className="configLeftTop">
        <div className="configLeftHead d-flex justify-content-between align-items-center">
          <h5 className="fontWeight-600 fileConfigHead colorBlack">
            File Configuration
          </h5>
          <div className="d-flex align-items-center breadCrumbLeft">
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

        <div className="position-relative">
          <div className="lightBlueBox configTopBlueBox">
            <div className="d-flex justify-content-between align-items-center configLeftFilters">
              <h6 className="fontWeight-600 colorBlack">Filters</h6>
              <button
                type="button"
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                onClick={() => setShowFilters(true)}
              >
                <span class="icon-Filter-Icon"></span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  All Filters
                </span>
              </button>
            </div>
            <div className="hrGreyLine"></div>
            <div className="configSelectBoxTop row">
              <div className="clientNameSelect col">
                <label htmlFor="clientName">
                  Client Name<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="clientName"
                  classNamePrefix="reactSelectBox"
                  placeholder="Shri Vasavamba..."
                />
              </div>
              <div className="clientNameSelect col">
                <label htmlFor="logType">
                  Log Type<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="logType"
                  classNamePrefix="reactSelectBox"
                  placeholder="CBS"
                />
              </div>
              <div className="clientNameSelect col">
                <label htmlFor="channelType">
                  Channel Type<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="channelType"
                  classNamePrefix="reactSelectBox"
                  placeholder="ATM"
                />
              </div>
              <div className="clientNameSelect col">
                  <label htmlFor="clientName">Mode Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="ACQUIR"
                  />
                </div>
            </div>

            <div className="text-center btnsBtm">
              <button
                type="button"
                className="btnPrimaryOutline"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Reset
              </button>
              <button
                type="button"
                className="btnPrimary ms-2"
                onClick={() => setSaveFilters(!saveFilters)}
              >
                Save
              </button>
            </div>
          </div>

          {showFilters ? (
            <div className="lightBlueBox configTopBlueBox absoluteFiltersBox">
              <div className="d-flex justify-content-between align-items-center configLeftFilters">
                <h6 className="fontWeight-600 colorBlack">Filters</h6>
                <button
                  type="button"
                  className="allFiltersBtn"
                  onClick={() => setShowFilters(false)}
                >
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4056 1.86735C15.7571 1.51588 15.7571 0.946033 15.4056 0.594561C15.0542 0.243089 14.4843 0.243089 14.1328 0.594561L15.4056 1.86735ZM0.594378 14.133C0.242906 14.4845 0.242906 15.0543 0.594378 15.4058C0.94585 15.7573 1.5157 15.7573 1.86717 15.4058L0.594378 14.133ZM14.1328 0.594561L0.594378 14.133L1.86717 15.4058L15.4056 1.86735L14.1328 0.594561Z"
                        fill="#003087"
                      />
                      <path
                        d="M0.594368 1.86735C0.242896 1.51588 0.242896 0.946033 0.594368 0.594561C0.94584 0.243089 1.51569 0.243089 1.86716 0.594561L0.594368 1.86735ZM15.4056 14.133C15.7571 14.4845 15.7571 15.0543 15.4056 15.4058C15.0542 15.7573 14.4843 15.7573 14.1328 15.4058L15.4056 14.133ZM1.86716 0.594561L15.4056 14.133L14.1328 15.4058L0.594368 1.86735L1.86716 0.594561Z"
                        fill="#003087"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="hrGreyLine"></div>

              <div className="configSelectBoxTop row">
                <div className="clientNameSelect col">
                  <label htmlFor="clientName">Client Name</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="Shri Vasavamba..."
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="logType">Log Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="logType"
                    classNamePrefix="reactSelectBox"
                    placeholder="CBS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Channel Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="ATM"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="clientName">Mode Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="ACQUIR"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="logType">File Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="logType"
                    classNamePrefix="reactSelectBox"
                    placeholder="Plain Text"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">File Extention</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder=".XLS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Vendor</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="A"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">File Prefix</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="PROCESS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Cut Off Time</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="11:59"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Start Line No.</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="0"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">End Line No.</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="420"
                  />
                </div>
              </div>

              <div className="text-center btnsBtm">
                <button
                  type="button"
                  className="btnPrimaryOutline"
                  onClick={() => setResetFilters(!resetFilters)}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btnPrimary ms-2"
                  onClick={() => setSaveFilters(!saveFilters)}
                >
                  Save
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* Reset Filters */}
        {resetFilters && (
          <Modal
            show={resetFilters}
            onHide={() => setResetFilters(!resetFilters)}
            centered
            className="defaultThemeModal saveFiltersModal errorFiltersModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={ErrorGif} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters could not be reset due to internal server error.
              </p>
            </Modal.Body>
          </Modal>
        )}

        {/* Save Filters */}
        {saveFilters && (
          <Modal
            show={saveFilters}
            onHide={() => setSaveFilters(!saveFilters)}
            centered
            className="defaultThemeModal saveFiltersModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Filters
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={SuccessGif} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters Applied Successfully!
              </p>
            </Modal.Body>
          </Modal>
        )}
      </div>

      {/* Config Left Bottom */}
      <div className="configLeftBottom">
        <div className="configBottomHeadingBox">
          <h6 className="fontWeight-600 colorBlack">Configured Format</h6>
        </div>

        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={ConfigTableLeftEntries}
                isSearchable={false}
                placeholder="10 Entries"
                classNamePrefix="reactSelectBox"
              />
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <span class="icon-Search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Pdf} alt="Pdf" />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipExcel}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table table-striped table-hover table-borderless align-middle">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "22%" }}>
                    Client Name
                  </th>
                  <th scope="col">Log Type</th>
                  <th scope="col">Channel</th>
                  <th scope="col">File Prefix</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Vendor Name</th>
                  <th scope="col">File Extention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p className="tableTextInner">Sri Vasavamba Cooperative Urban Bank Ltd</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Punjab National Bank</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Sri Vasavamba Cooperative Urban Bank Ltd</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Punjab National Bank</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Sri Vasavamba Cooperative Urban Bank Ltd</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Punjab National Bank</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Sri Vasavamba Cooperative Urban Bank Ltd</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Punjab National Bank</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Sri Vasavamba Cooperative Urban Bank Ltd</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Punjab National Bank</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Sri Vasavamba Cooperative Urban Bank Ltd</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Punjab National Bank</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Sri Vasavamba Cooperative Urban Bank Ltd</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td><p className="tableTextInner">Punjab National Bank</p></td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="paginationBox d-flex align-items-center justify-content-between my-12">
            <div className="paginationLeft fontSize12">
              Showing 1 to 10 of 49 entries
            </div>

            <div className="paginationRight">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link previousPagination"
                      to="/"
                      aria-label="Previous"
                    >
                      <span
                        class="icon-Dropdown-Arrow"
                        style={{ fontSize: "12px" }}
                      ></span>
                      <span>First</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      2
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link paginationBottom" to="/">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link nextPagination"
                      to="/"
                      aria-label="Next"
                    >
                      <span>Last</span>
                      <span
                        class="icon-Dropdown-Arrow-1"
                        style={{ fontSize: "12px" }}
                      ></span>
                    </Link>
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

export default ConfigLeft;
