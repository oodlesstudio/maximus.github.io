import React from "react";
// Components
import Header from "../components/common/Header";
import TerminalRegistration from "../components/branchRegistration/TerminalRegistration"
import Footer from "../components/common/Footer";

const BranchRegistration = () => {
  return (
    <div>
      <Header />
      <TerminalRegistration />
      <Footer />
    </div>
  );
};

export default BranchRegistration;
