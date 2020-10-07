import React from "react";
import { Prey } from "../../types/Prey";
import { CriteriaController } from "../../types/CriteriaController"
import { LogicCriteria } from "../logic/LogicCriteria";
export interface DesignItemProps {
  prey: Prey[]
  sources: string[]
  controller: CriteriaController
  activeItem: string
}

export const DesignItem = (props: DesignItemProps) => {
  return <div>
    <LogicCriteria controller={props.controller} activeItem={props.activeItem} />
    <div>
      {props.prey.map(item =>
        <div key={item.wt_or_vol}> {item.taxon} </div>
      )}
    </div>
  </div>;
};

