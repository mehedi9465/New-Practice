import { AppBar, Grid, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Count from '../../Components/Count';
import AllContacts from './AllContacts';
import ManageContacts from './ManageContacts';

const Contacts = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
      };
    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <AppBar color='secondary'>
                    <Tabs value={selectedTab} onChange={handleChange}>
                        <Tab label="Manage Contacts" />
                        <Tab label="View Contacts" />
                    </Tabs>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    {selectedTab === 0 && <ManageContacts />}
                    {selectedTab === 1 && <AllContacts />}
                </Grid>
            </Grid>
        </>
    );
};

export default Contacts;