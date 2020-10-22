import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    AreaSeries,
    Title,
    Legend,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import classNames from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation, EventTracker } from '@devexpress/dx-react-chart';

const setStyle = (style) => {
    const wrap = withStyles({ root: style });
    return Target => wrap(({ classes, className, ...restProps }) => (
        <Target className={classNames(classes.root, className)} {...restProps} />
    ));
};

const LegendRoot = setStyle({
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
})(Legend.Root);

const LegendLabel = setStyle({
    whiteSpace: 'nowrap',
})(Legend.Label);

const ChartRoot = setStyle({
    paddingRight: '20px',
    minWidth: '380px'
})(Chart.Root);

function customizeTooltip(pointInfo) {
    return {
        text: `${pointInfo.argumentText}<br/>${pointInfo.valueText}`
    };
}

const format = () => tick => tick;
const stacks = [{
    series: ['Value'],
}];

function PortchainAreaChart({data = [], title, name, valueField, argumentField}) {
    return (
        <Paper>
            <Chart
                data={data}
                rootComponent={ChartRoot}
            >
                <ArgumentAxis tickFormat={format} />
                <ValueAxis />
                <AreaSeries
                    name={name}
                    valueField={valueField}
                    argumentField={argumentField}
                />
                <Animation />
                <Legend position={'bottom'} rootComponent={LegendRoot} labelComponent={LegendLabel} />
                <Title text={title} />
                <EventTracker />
                <Tooltip
                    customizeTooltip={customizeTooltip}
                />
                <Stack stacks={stacks} />
            </Chart>
        </Paper>
    );
}

PortchainAreaChart.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    valueField: PropTypes.string.isRequired,
    argumentField: PropTypes.string.isRequired
};

export default PortchainAreaChart;