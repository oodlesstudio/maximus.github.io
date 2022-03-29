import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import {
  OverlayTrigger,
  Tooltip,
  Popover,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";

// Components
import SideBar from "./SideBar";
import { changeThemes } from "../../constants/actions/themeChangeAction";

// Images
import Logo from "../../images/common/logo.svg";
import LogoRight from "../../images/common/logoRight.svg";
import LogoDark from "../../images/common/logoDark.svg";
import LogoDarkRight from "../../images/common/logoDarkRight.svg";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Header = () => {
  // Change Logo
  const changeTheme = useSelector((state) => {
    return state.themeChangeReducer;
  });

  const [logoLeft, setLogoLeft] = useState(Logo);
  const [logoRight, setLogoRight] = useState(LogoRight);

  useEffect(() => {
    if (changeTheme.theme === "default") {
      setLogoLeft(Logo);
      setLogoRight(LogoRight);
    } else if (changeTheme.theme === "light") {
      setLogoLeft(Logo);
      setLogoRight(LogoRight);
    } else if (changeTheme.theme === "dark") {
      setLogoLeft(LogoDark);
      setLogoRight(LogoDarkRight);
    }
  }, [changeTheme]);

  // Select Menu
  const [selectedOption, setSelectedOption] = useState(null);

  // Left Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Version 6.0.0
    </Tooltip>
  );

  // SideBar Menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Settings Popover
  const popover = (
    <Popover id="popover-basic" className="headerSettingsPopover">
      <Popover.Body>
        <ul>
          <li>
            <button
              className="fontSize14"
              // onClick={() => setSiteConfiguration(!siteConfiguration)}
              onClick={() => {
                setSiteConfiguration(!siteConfiguration);
                this.hidePopover();
              }}
            >
              Site Configuration
            </button>
          </li>
          <li>
            <button
              className="fontSize14"
              onClick={() => setOpenDefaultModal(!openDefaultModal)}
            >
              Default Theme
            </button>
          </li>
          <li>
            <button
              className="fontSize14"
              onClick={() => setOpenLightModal(!openLightModal)}
            >
              Light Theme
            </button>
          </li>
          <li>
            <button
              className="fontSize14"
              style={{ border: "none" }}
              onClick={() => setOpenDarkModal(!openDarkModal)}
            >
              Dark Theme
            </button>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  // Change Theme Modals
  const [siteConfiguration, setSiteConfiguration] = useState(false);
  const [openDefaultModal, setOpenDefaultModal] = useState(false);
  const [openLightModal, setOpenLightModal] = useState(false);
  const [openDarkModal, setOpenDarkModal] = useState(false);

  // Change Theme
  const dispatch = useDispatch();
  const changeThemeDefault = () => {
    dispatch(changeThemes("default"));
  };
  const changeThemeLight = () => {
    dispatch(changeThemes("light"));
  };
  const changeThemeDark = () => {
    dispatch(changeThemes("dark"));
  };

  return (
    <div className="headerBox w-100 d-flex align-items-center">
      {/* Header Left */}
      <div className="headerLeft d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button className="headerHamburger" onClick={handleShow}>
            <span class="icon-Hamburger-Menu"></span>
          </button>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img src={logoLeft} alt="Logo" />
          </OverlayTrigger>
        </div>
        <p className="fontSize14">
          Session Time: <span className="fontSize14-sb">59:12</span>
        </p>

        <Offcanvas show={show} onHide={handleClose} className="headerSideMenu">
          <Offcanvas.Body>
            <SideBar buttonCollapse={handleClose} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* Header Right */}
      <div className="headerRight d-flex justify-content-end align-items-center">
        <div className="d-flex align-items-center">
          {/* Search */}
          <span class="icon-Search-1 me-3"></span>

          {/* Settings */}
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            rootClose={true}
          >
            <button type="button" className="me-3">
              <span class="icon-ant-design_setting-outlined"></span>
            </button>
          </OverlayTrigger>

          {/* Notifications */}
          <button type="button" className="position-relative me-3">
            <span class="icon-ion_notifications-outline"></span>
            <span class="position-absolute top-0 start-100 translate-middle notificationCount">
              10
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>

          <div className="d-flex align-items-center">
            {/* People */}
            <span class="icon-fluent_person-16-regular"></span>

            <div className="headerMyAccount">
              <p className="fontSize14-m colorPrimaryDefault">Sanjay_AD</p>
              <p className="text-uppercase fontSize10-m">Super Admin</p>
            </div>
          </div>
        </div>

        <img src={logoRight} alt="Logo Right" className="ms-4" />

        {/* Site Configuration Modal */}
        {siteConfiguration && (
          <Modal
            show={siteConfiguration}
            onHide={() => setSiteConfiguration(!siteConfiguration)}
            centered
            className="defaultThemeModal siteConfigurationModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Site Configuration
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="clientNameSelect">
                <label htmlFor="siteConfiguration">Select Startup Page</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="siteConfiguration"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary btnPrimary">Submit</Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Default Theme Modal */}
        {openDefaultModal && (
          <Modal
            show={openDefaultModal}
            onHide={() => setOpenDefaultModal(!openDefaultModal)}
            centered
            className="defaultThemeModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Default Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary btnPrimaryOutline">Cancel</Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeDefault();
                  setOpenDefaultModal(!openDefaultModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Light Theme Modal */}
        {openLightModal && (
          <Modal
            show={openLightModal}
            onHide={() => setOpenLightModal(!openLightModal)}
            centered
            className="defaultThemeModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Light Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary btnPrimaryOutline"
                onClick={() => setOpenLightModal(!openLightModal)}
              >
                Cancel
              </Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeLight();
                  setOpenLightModal(!openLightModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Dark Theme Modal */}
        {openDarkModal && (
          <Modal
            show={openDarkModal}
            onHide={() => setOpenDarkModal(!openDarkModal)}
            className="defaultThemeModal"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Dark Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary btnPrimaryOutline"
                onClick={() => setOpenDarkModal(!openDarkModal)}
              >
                Cancel
              </Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeDark();
                  setOpenDarkModal(!openDarkModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;
