import React from "react";
import { ContinuousColorLegend } from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

export interface DesignScaleProps {}

export const DesignScale = () => {
  return (
    <ContinuousColorLegend
      width={300}
      startTitle={"0"}
      midTitle={"35"}
      endTitle={"70"}
      startColor={"#ffffff"}
      endColor={"#b15900"}
    />
  );
};

