import React, { useState } from "react";
import Select from "react-select";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const UnmatchedMainWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Modals
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);
  const [referenceNo, setReferenceNo] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [logType, setLogType] = useState(false);
  const changeLogType = () => setLogType(true);

  const [channelType, setChannelType] = useState(false);
  const changeChannelType = () => setChannelType(true);

  const [modType, setModType] = useState(false);
  const changeModType = () => setModType(true);

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

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="configLeft unmatchedContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Unmatched Transactions
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Home</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Daily Reports</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12">Unmatched Transactions</p>
          </Link>
        </div>
      </div>

      {/* Config Left Top */}
      <div className="configLeftTop">
        <div className="accordion" id="unmatchedFilters">
          <div className="accordion-item">
            <div
              className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
              id="unmatchedFiltersHeading"
            >
              <h6 className="fontWeight-600 colorBlack">Filters</h6>
              <button
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#unmatchedFiltersCollapse"
                aria-expanded="true"
                aria-controls="unmatchedFiltersCollapse"
              >
                <span className="icon-Hide"></span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  Show / Hide
                </span>
              </button>
            </div>
            <div
              id="unmatchedFiltersCollapse"
              className="accordion-collapse collapse show"
              aria-labelledby="unmatchedFiltersHeading"
              data-bs-parent="#unmatchedFilters"
            >
              <div className="accordion-body">
                <div className="hrGreyLine"></div>
                <div className="configSelectBoxTop row">
                  <div className="clientNameSelect col">
                    <label htmlFor="clientName">Client Name</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setClientName();
                        changeClientName();
                      }}
                      options={options}
                      id="clientName"
                      classNamePrefix="reactSelectBox"
                      placeholder="Sri Vasavamba Cooperativ..."
                    />
                    {clientName && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  <div className="clientNameSelect col">
                    <label htmlFor="channelType">Channel Type</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setChannelType();
                        changeChannelType();
                      }}
                      options={options}
                      id="channelType"
                      classNamePrefix="reactSelectBox"
                      placeholder="ATM"
                    />
                    {channelType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  <div className="clientNameSelect col">
                    <label htmlFor="clientName">Mode Type</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setModType();
                        changeModType();
                      }}
                      options={options}
                      id="clientName"
                      classNamePrefix="reactSelectBox"
                      placeholder="ACQUIRER"
                    />
                    {modType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  <div className="clientNameSelect col">
                    <label htmlFor="logType">Txn Type</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setLogType();
                        changeLogType();
                      }}
                      options={options}
                      id="logType"
                      classNamePrefix="reactSelectBox"
                      placeholder="Withdrawal"
                    />
                    {logType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  <div className="clientNameSelect col">
                    <label htmlFor="logType">Terminal</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setLogType();
                        changeLogType();
                      }}
                      options={options}
                      id="logType"
                      classNamePrefix="reactSelectBox"
                      placeholder="ALL"
                    />
                    {logType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  <div className="clientNameSelect col">
                    <label htmlFor="channelType">Start Line No.</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>
                  <div className="clientNameSelect col">
                    <label htmlFor="channelType">To Date</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
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
            </div>
          </div>
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
              <img src={Error} alt="Success" />
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
              <img src={Success} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters Applied Successfully!
              </p>
            </Modal.Body>
          </Modal>
        )}
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom">
        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
                classNamePrefix="reactSelectBox"
                placeholder="10 Entries"
              />
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <span className="icon-Search form-control-feedback"></span>
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
                  <th scope="col">
                    Channel
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Mode
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Terminal ID
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Date & Time
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Reference No.
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Card No.
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Account No.
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Txn Amount
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    EJ Status
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Switch Status
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Network Status
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    GL Status
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Txns Type
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Remark
                    <Link to="/">
                      <span className="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
                </tr>
                <tr>
                  <td>ATM</td>
                  <td>ACQUIRER</td>
                  <td>SVCB0001</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td
                    className="fontWeight-500 colorPrimaryDefault cursorPointer"
                    onClick={() => setReferenceNo(!referenceNo)}
                  >
                    203218001138
                  </td>
                  <td>459115XXXXXX5716</td>
                  <td>XXXXXXXXXXXXXXX1234</td>
                  <td>6100.00</td>
                  <td>No Data Recorded</td>
                  <td>Successful</td>
                  <td>Successful</td>
                  <td>No Data Recorded</td>
                  <td>Withdrawal</td>
                  <td>Check with JP/came</td>
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
                        className="icon-Dropdown-Arrow"
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
                        className="icon-Dropdown-Arrow-1"
                        style={{ fontSize: "12px" }}
                      ></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Save Filters */}
        {referenceNo && (
          <Modal
            show={referenceNo}
            onHide={() => setReferenceNo(!referenceNo)}
            centered
            className="defaultThemeModal saveFiltersModal unmatchedTableModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Transaction ID Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  EJ Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <em>No record(s) found...</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  SW Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SVCB0001</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>459115XXXXXX5716</td>
                      <td>203218001138</td>
                      <td>6100.00</td>
                      <td>00</td>
                      <td>N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  Network Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SVCB0001</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>459115XXXXXX5716</td>
                      <td>203218001138</td>
                      <td>6100.00</td>
                      <td>00</td>
                      <td>N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-100 table-responsive">
                <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                  GL Details
                </p>
                <table className="table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">
                        Terminal ID
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Date & Time
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Card No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reference No.
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Txn Amount
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Response Code
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Reversal Flag
                        <Link to="/">
                          <span className="icon-Table-Sorting"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <em>No record(s) found...</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default UnmatchedMainWindow;
