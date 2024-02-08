import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Education from "./Education";
import TabsView from "./TabsView";

const AccordionUsage: React.FC = () => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Get the selected file
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    // You can perform upload logic here
    if (selectedFile) {
      // For example, you can use the FormData API to send the file to a server
      const formData = new FormData();
      formData.append("image", selectedFile);

      // You can then make an API call to upload the file
      // fetch('/upload', {
      //   method: 'POST',
      //   body: formData,
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Upload successful:', data);
      // })
      // .catch(error => {
      //   console.error('Error uploading file:', error);
      // });
    } else {
      console.error("No file selected");
    }
  };

  return (
    <Box
      sx={{ p: 3, m: "0 auto" }}
      width={!isMobile ? "auto" : "70%"}
      component={Paper}
    >
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        variant="h5"
        pb={"2rem"}
      >
        Professional Resume
      </Typography>
      <TabsView />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: "18px" }}
        >
          Personal Details
        </AccordionSummary>
        <AccordionDetails>
          <form action="">
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  size="small"
                  type="text"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  size="small"
                  type="text"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  fullWidth
                  label="Father Name"
                  size="small"
                  type="text"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  fullWidth
                  label="Mother Name"
                  size="small"
                  type="text"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  fullWidth
                  label="Job Title"
                  size="small"
                  type="text"
                />
              </Grid>

              <Grid item lg={6} xs={12}>
                <TextField
                  fullWidth
                  label="Nationality"
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
                <TextField
                  fullWidth
                  label="Postal Code"
                  size="small"
                  type="text"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField fullWidth label="City" size="small" type="text" />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  fullWidth
                  label="NID Number"
                  size="small"
                  type="text"
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  type="file"
                  onChange={handleFileChange}
                  size="small"
                  label="Upload Your Image"
                  InputLabelProps={{ shrink: true}}
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
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained">Save Info</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ fontSize: "18px" }}
        >
          EDUCATION/TRAINING
        </AccordionSummary>
        <AccordionDetails>
          <Education />
        </AccordionDetails>
        
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ fontSize: "18px" }}
        >
          Skills
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default AccordionUsage;
