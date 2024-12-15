import React from "react";

import "./faq.css";
import Faq from "../components/faq";

const Faqs = () => {
  return (
    <div>
      <div className="faq_banner">
        <h1 className="faq_title">FAQ </h1>
      </div>
      <Faq />
    </div>
  );
};

export default Faqs;
