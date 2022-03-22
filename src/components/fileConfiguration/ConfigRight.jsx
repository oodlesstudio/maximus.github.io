import React, { useState } from "react";
import Select from "react-select";

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
        <div className="configRightHead"></div>

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

      <div className="configBottomHeadingBox">
        </div>

      {/* Config Left Bottom */}
      <div className="configLeftBottom">
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
                  <th scope="col" style={{ width: "29.16%" }}>
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
        </div>
      </div>
    </div>
  );
};

export default ConfigRight;
