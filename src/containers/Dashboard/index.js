import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './index.scss';

import Ports from '../../components/Ports';
import Vessels from '../../components/Vessels';

const Dashboard = () => {
    const [tab, setTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <div className='dashboard-container'>
            <AppBar position='static'>
                <Tabs value={tab} onChange={handleTabChange} aria-label="main-tabs">
                    <Tab label='Ports' />
                    <Tab label='Vessels' />
                </Tabs>
            </AppBar>
            {tab === 0 && (
                <Ports />
            )}
            {tab === 1 && (
                <Vessels/>
            )}
        </div>
    );
};

export default Dashboard;
