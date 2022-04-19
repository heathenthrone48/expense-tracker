import React, { useState } from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = props => {

    const [max, setMax] = useState(0);

    const chartDataPoints = [
        { label:'Jan', value :0},
        { label:'Feb', value :0},
        { label:'Mar', value :0},
        { label:'Apr', value :0},
        { label:'May', value :0},
        { label:'Jun', value :0},
        { label:'Jul', value :0},
        { label:'Aug', value :0},
        { label:'Sep', value :0},
        { label:'Oct', value :0},
        { label:'Nov', value :0},
        { label:'Dec', value :0},
    ]  

    for(let expense of props.expenses){
        let chartMonth = expense.date.getMonth();
        chartDataPoints[chartMonth].value += expense.price;
    }

    for( const point in chartDataPoints){
        if( chartDataPoints[point].value > max) setMax(chartDataPoints[point].value);
    }

    return <Chart dataPoints = {chartDataPoints} max={max}/>
}

export default ExpenseChart;