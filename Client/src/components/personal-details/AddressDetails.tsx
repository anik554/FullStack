import { Box, Grid, TextField, Typography } from "@mui/material";
import { countries } from "../../components/exportData/Dropdown";

import React, { useState } from "react";

const AddressDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryId = parseInt(event.target.value, 10);
    setSelectedCountry(countryId);
  };

  return (
    <Box>
      <Typography pb={"1rem"}>Present Address</Typography>
      <Grid container spacing={1} direction={"row"}>
        <Grid item lg={4} xs={4} md={4} sm={4}>
          <TextField
            fullWidth
            select
            size="small"
            label="Select"
            defaultValue=""
            SelectProps={{ native: true }}
            InputLabelProps={{ shrink: true }}
            onChange={handleCountryChange}
          >
            <option value="">Select</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item lg={4} xs={4} md={4} sm={4}>
          <TextField
            fullWidth
            select
            size="small"
            label="District"
            defaultValue=""
            SelectProps={{ native: true }}
            InputLabelProps={{ shrink: true }}
          >
            <option value="">Select</option>
            {selectedCountry &&
              countries
                .find((country) => country.id === selectedCountry)
                ?.districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
          </TextField>
        </Grid>
        <Grid item lg={4} xs={4} md={4} sm={4}>
          <TextField size="small" label="P.O"></TextField>
        </Grid>
        <Grid item lg={12}>
          <TextField
            fullWidth
            size="small"
            label="Type your House No/Road/Village"
          ></TextField>
        </Grid>
      </Grid>

      <Typography pb={"1rem"} pt={"1rem"}>
        Permanent Address
      </Typography>
      <Grid container spacing={1} direction={"row"}>
        <Grid item lg={4} xs={4} md={4} sm={4}>
          <TextField size="small" label="District"></TextField>
        </Grid>
        <Grid item lg={4} xs={4} md={4} sm={4}>
          <TextField size="small" label="Thana"></TextField>
        </Grid>
        <Grid item lg={4} xs={4} md={4} sm={4}>
          <TextField size="small" label="P.O"></TextField>
        </Grid>
        <Grid item lg={12}>
          <TextField
            fullWidth
            size="small"
            label="Type your House No/Road/Village"
          ></TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressDetails;
