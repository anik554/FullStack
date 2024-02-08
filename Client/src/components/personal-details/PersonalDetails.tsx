import { Button, Grid, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { gender } from "../../components/exportData/Dropdown";
import { religion } from "../../components/exportData/Dropdown";
import { maritalStatus } from "../../components/exportData/Dropdown";
import { bloodGroup } from "../../components/exportData/Dropdown";


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
            <TextField
              fullWidth
              label="Father's Name"
              size="small"
              type="text"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Mother's Name"
              size="small"
              type="text"
            />
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
            <TextField
              fullWidth
              label="Gender"
              size="small"
              select
              defaultValue={"Select"}
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
            >
              {gender.map((option) => (
                <option key={option.value} value={option.value}>
                  {" "}
                  {option.label}{" "}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Religion"
              select
              size="small"
              defaultValue={"Select"}
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
            >
              {" "}
              {religion.map((option) => (
                <option key={option.value} value={option.value}>
                  {" "}
                  {option.label}{" "}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Marital Status"
              select
              size="small"
              defaultValue={"Select"}
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
            >
              {" "}
              {maritalStatus.map((option) => (
                <option key={option.value} value={option.value}>
                  {" "}
                  {option.label}{" "}
                </option>
              ))}
            </TextField >
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Nationality" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="National Id" size="small" type="text" />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Passport Number"
              size="small"
              type="text"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Secondary Mobile"
              size="small"
              type="text"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Emergency Contact"
              size="small"
              type="text"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Alternate Email"
              size="small"
              type="text"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              fullWidth
              label="Blood Group"
              select
              size="small"
              defaultValue={"Select"}
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
            >
              {" "}
              {bloodGroup.map((option) => (
                <option key={option.value} value={option.value}>
                  {" "}
                  {option.label}{" "}
                </option>
              ))}
            </TextField >
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Height (meters)" size="small" type="text" />
          </Grid>
          
          <Grid item lg={6} xs={12}>
            <TextField fullWidth label="Weight (kg)" size="small" type="text" />
          </Grid>
          
          <Grid item lg={6} xs={12} display={'flex'}>
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
              // sx={{ ml: "1rem" }}
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
