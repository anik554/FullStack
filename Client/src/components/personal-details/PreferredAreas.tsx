import { Box, Grid, TextField } from '@mui/material';
import React from 'react';

const PreferredAreas = () => {
    return (
        <Box>
            <Grid container spacing={1} direction={"row"}>
                <Grid item lg={6} xs={4} md={4} sm={4}>
                    <TextField fullWidth type='text' label="Inside Dhaka" size='small'  />
                </Grid>
                <Grid item lg={6} xs={4} md={4} sm={4}>
                    <TextField fullWidth type='text' label="Outside Dhaka" size='small' />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PreferredAreas;