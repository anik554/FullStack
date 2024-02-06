import { Button, Grid,TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const PersonalDetails: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
    } else {
      console.error("No file selected");
    }
  };
  return (
    <div>
      <form action="">
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="First Name" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Last Name" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Father Name" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Mother Name" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Job Title" size="small" type="text" />
          </Grid>

          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Nationality" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Date of Birth"
              size="small"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Phone" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Permanent Address"
              size="small"
              type="text"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Postal Code" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="City" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="NID Number" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              type="file"
              onChange={handleFileChange}
              size="small"
              label="Upload Your Image"
              InputLabelProps={{ shrink: true }}
            />
            <Button
              onClick={handleUpload}
              variant="outlined"
              size="medium"
              sx={{ ml: "4.5rem" }}
            >
              Upload
            </Button>
          </Grid>
          
        </Grid>
      </form>
    </div>
  );
};

export default PersonalDetails;
