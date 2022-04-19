import React from "react";

import './Chart.css';
import ChartBar from "./ChartBar.js";

const Chart = props => {

    // const max = Math.max(props)

    return <div className="chart">
        {props.dataPoints.map( dataPoint => 
            <ChartBar 
            key = {Math.random()}
            value = {dataPoint.value}
            maxValue = {props.max}
            label = {dataPoint.label}
            />

            )}
    </div>
}

export default Chart;