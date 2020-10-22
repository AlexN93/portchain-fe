import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { vesselsLoadAllCallAction } from './actions';
import PortchainTable from '../PortchainTable';
import PortchainAreaChart from '../PortchainAreaChart';

function Ports({vessels, vesselsLoadAll}) {
    const columns = [
        { title: 'Imo', field: 'imo'},
        { title: 'Name', field: 'name'},
        { title: 'Total Port Calls', field: 'portCalls'},
        { title: '', field: 'portCallDelays', type: 'modal'}
    ];
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        vesselsLoadAll('?delayDays=2,7,14&delayPerc=0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100&sortKey=portCalls&sortDir=desc');
    }, []);

    const generateModalContent = (data) => {
        if (!data) {
            setModalContent(null);
            return;
        }
        setModalContent([
            <Box display="flex" flexDirection="row" p={1} m={1}>
                <Box p={1}>
                    <PortchainAreaChart
                        key={0}
                        data={data[0].percentiles}
                        title={`${data[0].days} day delays`}
                        name={'Delays'}
                        valueField={'value'}
                        argumentField={'percentile'}
                    />
                </Box>
                <Box p={1}>
                    <PortchainAreaChart
                        key={1}
                        data={data[1].percentiles}
                        title={`${data[1].days} day delays`}
                        name={'Delays'}
                        valueField={'value'}
                        argumentField={'percentile'}
                    />
                </Box>
                <Box p={1}>
                    <PortchainAreaChart
                        key={2}
                        data={data[2].percentiles}
                        title={`${data[2].days} day delays`}
                        name={'Delays'}
                        valueField={'value'}
                        argumentField={'percentile'}
                    />
                </Box>
            </Box>
        ]);
    };

    return (
        <div className='vessels-container'>
            <div className='row mt-3'>
                <div className='col-12'>
                    <PortchainTable
                        columns={columns}
                        rows={vessels}
                        modalContent={modalContent}
                        setModalContent={generateModalContent}
                    />
                </div>
            </div>
        </div>
    );
}

Ports.propTypes = {
    vessels: PropTypes.array
};

const mapStateToProps = state => {
    const { vesselsListReducer } = state;
    return {
        vessels: vesselsListReducer.vessels
    };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => {
    return {
        vesselsLoadAll: (query) => dispatch(vesselsLoadAllCallAction(query))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ports);