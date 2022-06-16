import React from "react";
import ImpPage from "./ImpPage";
import Link from "./Link";
import LinkCSS from "./LinkCSS";
import RAFCE from "./RAFCE";

const GettingStarted = () => {
  return (
    <div>
      <h2 className='noSelect' style={{ margin: 30, textAlign: "center" }}>
        Getting Started{" "}
      </h2>
      <div className='all'>
          <ImpPage />
          <RAFCE />
          <Link />
          <LinkCSS />
      </div>
    </div>
  );
};

export default GettingStarted;
