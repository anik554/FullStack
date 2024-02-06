import { Box, Grid, TextField } from "@mui/material";
import React from "react";

const Education:React.FC = () => {
  return (
    <Box>
      <form action="">
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Level of Education" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Exam/Degree Title" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Concentration/ Major/Group" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Institute Name" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Result" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Year of Passing" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Duration" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Achievement" size="small" type="text" />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Education;
