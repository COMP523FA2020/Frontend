import React from "react";
import USAMap from "react-usa-map";
import { DesignScale } from "./DesignScale";

interface DesignMapProps {
  customFill: {};
}

export const DesignMap = (props: DesignMapProps) => {
  return (
    <div className="message is-primary">
      <div className="message-header">Number of Records Per State</div>
      <div className="message-body">
        <USAMap height={132} width={200} customize={props.customFill} />
        <DesignScale />
      </div>
    </div>
  );
};
