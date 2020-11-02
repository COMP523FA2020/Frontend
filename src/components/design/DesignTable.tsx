import React from "react";
import { LogicErrorPage } from "../logic/LogicErrorPage";
import { DesignDownload } from "./DesignDownload";
import { TableController } from "../../types/TableController";
import { DesignTableHeader } from "./DesignTableHeader";
import { ItemType } from "../../App";

interface DesignTableProps {
  data: any[];
  controller: TableController;
  activeItem: string;
  itemType: ItemType;
  options: {
    variables: {
      name: string;
      startYear: string;
      endYear: string;
      season: string;
      region: string;
      metrics: string;
      level: string;
    };
  };
}

export const DesignTable = (props: DesignTableProps) => {
  if (props.data.length < 1) {
    return (
      <div>
        <LogicErrorPage errorMessage={"That query returned no results"} />
      </div>
    );
  }

  let metadata = [
    "Species: " + props.activeItem,
    "Region: " + props.options.variables.region,
    "Season: " + props.options.variables.season,
    "startYear: " + props.options.variables.startYear,
    "endYear: " + props.options.variables.endYear,
    "Metrics: " + props.options.variables.metrics,
    "Level: " + props.options.variables.level,
    "Table Timestamp: " + new Date(),
  ];

  return (
    <div className="message is-dark">
      <div className="message-header">
        Data
        <DesignDownload
          csvData={downloadData(props.data, metadata)}
          fileName={"avianDietTable"}
        />
      </div>
      <div className="message-body has-background-light">
        <div className="has-background-light is-scrollable has-text-dark">
          <table className="table is-fullwidth has-background-light has-text-dark">
            <thead>
              <DesignTableHeader
                itemType={props.itemType}
                controller={props.controller}
              />
            </thead>
            <tbody>
              {props.data.map((item) => {
                return (
                  <tr key={props.data.indexOf(item)}>
                    {Object.keys(item)
                      .filter((val) => val != "__typename")
                      .map((datum) => {
                        return <td key={datum}>{item[datum]}</td>;
                      })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <DesignTableHeader
                itemType={props.itemType}
                controller={props.controller}
              />
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

let downloadData = (preyData: any[], metadata: any[]) => {
  let resData = [];
  let headers = [];
  headers = Object.keys(preyData[0]);
  resData.push(metadata);
  resData.push([]);
  resData.push(headers);
  let body = [];
  for (let item of preyData) {
    body = Object.values(item);
    resData.push(body);
  }
  return resData;
};
