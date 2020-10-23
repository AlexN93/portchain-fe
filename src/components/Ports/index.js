import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { portsLoadAllCallAction } from './actions';
import PortchainTable from '../PortchainTable';
import PortchainBarChart from '../PortchainBarChart';
import PortchainAreaChart from '../PortchainAreaChart';

function Ports({ports, portsLoadAll}) {
    const columns = [
        { title: 'Id', field: 'id'},
        { title: 'Name', field: 'name'},
        { title: 'Total Port Calls', field: 'portCalls'},
        { title: '', field: 'portCallDurations', type: 'modal'}
    ];
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        portsLoadAll('?durationPerc=0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100&sortKey=portCalls&sortDir=desc');
    }, []);

    const generateModalContent = (data) => {
        if (!data) {
            setModalContent(null);
            return;
        }
        setModalContent(<PortchainAreaChart
            data={data.percentiles}
            title={`Port call durations`}
            name={'Durations'}
            valueField={'value'}
            argumentField={'percentile'}
        />)
    };

    return (
        <div className='ports-container'>
            <div className='row mt-3'>
                <div className='col-8'>
                    <PortchainTable
                        columns={columns}
                        rows={ports}
                        modalContent={modalContent}
                        setModalContent={generateModalContent}
                    />
                </div>
                <div className='col-4'>
                    <PortchainBarChart
                        data={ports.slice(0, 5)}
                        title={'Top 5 most visited ports'}
                        name={'Port Calls'}
                        valueField={'portCalls'}
                        argumentField={'name'}
                    />
                    <br/>
                    <PortchainBarChart
                        data={ports.slice(Math.max(ports.length - 5, 0))}
                        title={'Top 5 least visited ports'}
                        name={'Port Calls'}
                        valueField={'portCalls'}
                        argumentField={'name'}
                    />
                </div>
            </div>
        </div>
    );
}

Ports.propTypes = {
    ports: PropTypes.array
};

const mapStateToProps = state => {
    const { portsListReducer } = state;
    return {
        ports: portsListReducer.ports
    };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => {
    return {
        portsLoadAll: (query) => dispatch(portsLoadAllCallAction(query))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ports);