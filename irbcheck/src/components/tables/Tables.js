import React from "react";
import IRB from "./IRB";
import IRBTCGB from "./IRBTCGB";
import IRBTAS from "./IRBTAS";
import IRBGUMRUK from "./IRBGUMRUK";

const Tables = () => {
  return (
    <div className="project-list section">
      <IRB />
      <IRBTCGB />
      <IRBTAS />
      <IRBGUMRUK />
    </div>
  );
};
export default Tables;
