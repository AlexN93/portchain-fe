import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
    Legend,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import Root from './Root';
import Label from './Label';

function PortchainBarChart({data, title, name, valueField, argumentField}) {
    return (
        <Paper>
            <Chart
                data={data}
            >
                <ArgumentAxis />
                <ValueAxis/>
                <BarSeries
                    name={name}
                    valueField={valueField}
                    argumentField={argumentField}
                />
                <Animation />
                <Legend position='bottom' rootComponent={Root} labelComponent={Label} />
                <Title text={title} />
                <EventTracker />
                <Tooltip />
            </Chart>
        </Paper>
    );
}

PortchainBarChart.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    valueField: PropTypes.string.isRequired,
    argumentField: PropTypes.string.isRequired
};

export default PortchainBarChart;