import React from "react";
import { CriteriaController } from "../../types/CriteriaController";
import { LogicCriteria } from "../logic/LogicCriteria";
import { LogicTable } from "../logic/LogicTable";
import { LogicGraph, LogicGraphTypes } from "../logic/LogicGraph";
import { LogicSources } from "../logic/LogicSources";
import { ItemType } from "../../App";
import { LogicMap } from "../logic/LogicMap";

export interface DesignItemProps {
  activeItem: string;
  itemType: ItemType;
  numStudies: number;
  numRecords: number;
  controller: CriteriaController;
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
}

export const DesignItem = (props: DesignItemProps) => {
  let isPredator = props.itemType == ItemType.PREDATOR;
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="columns replacement">
          <div className="column is-6">
            <LogicCriteria
              controller={props.controller}
              itemType={props.itemType}
            />
            <LogicTable
              activeItem={props.activeItem}
              updateItemType={props.updateItemType}
              updateActiveItem={props.updateActiveItem}
              itemType={props.itemType}
              controller={props.controller}
            />
          </div>
          <div className="column is-6">
            {isPredator ? (
              <div className="content">
                <div className="content has-text-centered is-size-2">
                  {props.numRecords} records from {props.numStudies} total
                  studies
                </div>
                <div className="columns">
                  <div className="column">
                    <LogicGraph
                      graphType={LogicGraphTypes.RECORDS_PER_SEASON}
                      activeItem={props.activeItem}
                      controller={props.controller}
                    />
                    <LogicGraph
                      graphType={LogicGraphTypes.RECORDS_PER_DECADE}
                      activeItem={props.activeItem}
                      controller={props.controller}
                    />
                  </div>
                  <div className="column">
                    <LogicGraph
                      graphType={LogicGraphTypes.RECORDS_PER_DIET_TYPE}
                      activeItem={props.activeItem}
                      controller={props.controller}
                    />
                    <LogicMap activeItem={props.activeItem} />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {isPredator ? (
          <div>
            {" "}
            <LogicSources
              activeItem={props.activeItem}
              itemType={props.itemType}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
