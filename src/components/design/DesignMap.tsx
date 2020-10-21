import React from 'react';
import USAMap from "react-usa-map";

interface DesignMapProps {
    data: any[]
}

let stateNames = new Map();

stateNames.set('Alabama', "AL");
stateNames.set("Alaska", "AK")
stateNames.set("Arizona", "AZ")
stateNames.set("Arkansas", "AR")
stateNames.set("California", "CA")
stateNames.set("Colorado", "CO")
stateNames.set("Connecticut", "CT")
stateNames.set("Delaware", "DE")
stateNames.set("Florida", "FL")
stateNames.set("Georgia", "GA")
stateNames.set("Hawaii", "HI")
stateNames.set("Idaho", "ID")
stateNames.set("Illinois", "IL")
stateNames.set("Indiana", "IN")
stateNames.set("Iowa", "IA")
stateNames.set("Kansas", "KS")
stateNames.set("Kentucky", "KY")
stateNames.set("Louisiana", "LA")
stateNames.set("Maine", "ME")
stateNames.set("Maryland", "MD")
stateNames.set("Massachusetts", "MA")
stateNames.set("Michigan", "MI")
stateNames.set("Minnesota", "MN")
stateNames.set("Mississippi", "MS")
stateNames.set("Missouri", "MO")
stateNames.set("Montana", "MT")
stateNames.set("Nebraska", "NE")
stateNames.set("Nevada", "NV")
stateNames.set("New Hampshire", "NH")
stateNames.set("New Jersey", "NJ")
stateNames.set("New Mexico", "NM")
stateNames.set("New York", "NY")
stateNames.set("North Carolina", "NC")
stateNames.set("North Dakota", "ND")
stateNames.set("Ohio", "OH")
stateNames.set("Oklahoma", "OK")
stateNames.set("Oregon", "OR")
stateNames.set("Pennsylvania", "PA")
stateNames.set("Rhode Island", "RI")
stateNames.set("South Carolina", "SC")
stateNames.set("South Dakota", "SD")
stateNames.set("Tennessee", "TN")
stateNames.set("Texas", "TX")
stateNames.set("Utah", "UT")
stateNames.set("Vermont", "VT")
stateNames.set("Virginia", "VA")
stateNames.set("Washington", "WA")
stateNames.set("West Virginia", "WV")
stateNames.set("Wisconsin", "WI")
stateNames.set("Wyoming", "WY");

export const numToColor = (count: number) => {
    if (count <= 0) {
        return "white";
    } else if (count <= 10) {
        return "#ffc04d";
    } else if (count <= 20) {
        return "#ffb733";
    } else if (count <= 30) {
        return "#ffae1a";
    } else if (count <= 40) {
        return "#ffa500";
    } else if (count <= 50) {
        return "#e69500";
    } else if (count <= 60) {
        return "#cc8400";
    } else if (count <= 70) {
        return "#b37400";
    } else {
        return "#b15900";
    }
}

let individualFill: {[k: string]: any} = {};
let customFill: {[k: string]: any} = {};

export const DesignMap = (props: DesignMapProps) => {

    let data = props.data;
    let region = "";
    let regionColor = "";
    for (let entry of data) {
        region = entry.region;
        if (!stateNames.has(region)) {
            continue;
        }
        region = stateNames.get(region);
        regionColor = numToColor(entry.count);
        customFill[region] = {"fill" : regionColor};
    }


    let customConfig = () => {
        return customFill;
    }

    return (
        <div className="App">
            <p className="is-size-3">
                Number of Studies Per State
            </p>
            <USAMap customize={customConfig()} />
        </div>
    )
}


