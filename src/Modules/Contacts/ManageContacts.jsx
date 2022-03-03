import { Autocomplete, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Switch, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const ManageContacts = () => {

    const selectOptions = [
        {title: 'One'},
        {title: 'Two'},
        {title: 'Three'},
        {title: 'Four'},
        {title: 'Five'},
        {title: 'Six'},
        {title: 'Seven'},
    ]

    const viewModeView = 'VIEW'
    
    const [isActive, setIsActive] = useState(false);
    
    const handleSwitch = e => {
        if(e.target.checked === true){
            setIsActive(true);
        }
        else{
            setIsActive(false)
        }
    }
    return (
        <Grid container >
            <Grid item xs={12}>
                <Button sx={{mr: 1}} variant='contained' size='small' color='error'>Create New</Button>
                <Button sx={{mr: 1}} variant='contained' size='small' disabled>Edit</Button>
                <Button sx={{mr: 1}} variant='contained' size='small' disabled color='success'>Save</Button>
                <Button sx={{mr: 1}} variant='contained' size='small' color='primary'>Cancel</Button>
            </Grid>
            <Grid item xs={12} textAlign='center' margin='15px'>
                <FormControlLabel
                value="active"
                control={<Switch color="primary" />}
                label="Active"
                labelPlacement="end"
                />
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: '15px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField size='small' fullWidth variant='outlined' placeholder='Enter Value' /> 
                        <Box textAlign='center'>
                            <FormControl component="fieldset">
                            <FormLabel component="legend">Customer or Supplier</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" >
                                <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                                <FormControlLabel value="supplier" control={<Radio />} label="Supplier" />
                            </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                        size='small'
                        id="combo-box-demo"
                        options={selectOptions}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField size='small' fullWidth {...params} label="Combo box" variant="outlined" />}
                        />
                        <Box textAlign='center'>
                            <FormControl component="fieldset">
                            <FormLabel component="legend">Company or Individual</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" >
                                <FormControlLabel value="company" control={<Radio />} label="Company" />
                                <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                            </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField size='small' fullWidth variant='outlined' placeholder='Phone' />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField size='small' fullWidth variant='outlined' placeholder='Mobile' />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField size='small' fullWidth variant='outlined' placeholder='Email' />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField size='small' fullWidth style={{ marginTop: '15px' }} variant='outlined' placeholder='Website' />
                </Grid>
                <Grid item xs={12}>
                    <TextField size='small' fullWidth style={{ marginTop: '15px' }} variant='outlined' placeholder='Address' />
                </Grid>
                <Grid item xs={12} marginTop= '15px'>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField size='small' fullWidth variant='outlined' placeholder='Government' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField size='small' fullWidth variant='outlined' placeholder='Area' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField size='small' fullWidth style={{ marginTop: '15px' }} variant='outlined' placeholder='Taxes NUmber' />
                </Grid>
                <Grid item xs={12} marginTop= '15px'>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField size='small' fullWidth variant='outlined' placeholder='Job Title' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField size='small' fullWidth variant='outlined' placeholder='Title' />
                        </Grid>
                    </Grid>
                </Grid>
                </Paper>
                <Paper style={{ padding: '15px', marginTop: '15px' }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField size='small' fullWidth variant='outlined' placeholder='Title' />
                        </Grid>
                        <Grid item xs={6}></Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ManageContacts;
