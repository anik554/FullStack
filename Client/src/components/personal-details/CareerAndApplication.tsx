import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

const CareerAndApplication = () => {
  return (
    <Box>
      <Typography pb={"0.5rem"}>Objective</Typography>
      <Grid container spacing={1} direction={"row"}>
        <Grid item lg={12} xs={4} md={4} sm={4}>
          <TextareaAutosize
            maxRows={4}
            aria-label="maximum height"
            style={{ width: "100%", height: "10vh", marginBottom: 1.5 }}
          />
        </Grid>
        <Grid item lg={6} xs={4} md={4} sm={4}>
          <TextField fullWidth size="small" label="Present Salary" sx={{ marginBottom: 1.5 }} />
        </Grid>
        <Grid item lg={6} xs={4} md={4} sm={4}>
          <TextField fullWidth size="small" label="Expected Salary" />
        </Grid>
        <Grid container direction="row" item lg={6} xs={4} md={4} sm={4}>
          <Typography variant="body1" sx={{ marginBottom: -1.5 }}>
            Looking for (Job Level)
          </Typography>
          <RadioGroup
            // defaultValue="female"
            name="controlled-radio-buttons-group"
            sx={{ my: 1 }}
            row
          >
            <FormControlLabel
              value="Entry Level"
              control={<Radio size="small" />}
              label="Entry Level"
            />
            <FormControlLabel
              value="Mid Level"
              control={<Radio size="small" />}
              label="Mid Level"
            />
            <FormControlLabel
              value="Top Level"
              control={<Radio size="small" />}
              label="Top Level"
            />
          </RadioGroup>
        </Grid>
        <Grid container direction="row" item lg={6} xs={4} md={4} sm={4}>
          <Typography variant="body1" sx={{ marginBottom: -1.5 }}>
            Available for (Job Nature)
          </Typography>
          <RadioGroup
            // defaultValue="female"
            name="controlled-radio-buttons-group"
            sx={{ my: 1 }}
            row
          >
            <FormControlLabel
              value="Full time"
              control={<Radio size="small" />}
              label="Full time"
            />
            <FormControlLabel
              value="Part time"
              control={<Radio size="small" />}
              label="Part time"
            />
            <FormControlLabel
              value="Internship"
              control={<Radio size="small" />}
              label="Internship"
            />
            <FormControlLabel
              value="Contract"
              control={<Radio size="small" />}
              label="Contract"
            />
          </RadioGroup>
        </Grid>
        <Grid item lg={6} xs={4} md={4} sm={4}></Grid>
      </Grid>
    </Box>
  );
};

export default CareerAndApplication;
