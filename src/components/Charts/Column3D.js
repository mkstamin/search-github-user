// STEP 1 - Include Dependencies
// Include react
// Include the fusioncharts library
import FusionCharts from 'fusioncharts';
// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';
// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React from 'react';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// eslint-disable-next-line react/jsx-props-no-spreading
const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: 'column3D', // The chart type
        width: '100%', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                // Set the chart caption
                caption: 'Most Popular',
                yAxisName: 'Stars',
                xAxisName: 'Repos',
                yAxisNameFontSize: '16px',
                xAxisNameFontSize: '16px',
                // paletteColors: '#CFB430, #2E50DD, #DD4B25, #2F74C0,#646C9B',
            },
            // Chart Data
            data,
        },
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ReactFC {...chartConfigs} />;
};
export default ChartComponent;
