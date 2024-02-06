import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Tab,
  Typography,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Education from "./Education";
import PersonalDetails from "./personal-details/PersonalDetails";

const TabsView: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box component={Paper} p={2} width={"50%"} m={'0 auto'}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="icon label tabs example"
        sx={{m:'0 auto'}}
        textColor="secondary"
        indicatorColor="secondary"
        centered
      >
        <Tab icon={<PhoneIphoneIcon />} label="PERSONAL" />
        <Tab icon={<PhoneIphoneIcon />} label="EDUCATION" />
        <Tab icon={<PhoneIphoneIcon />} label="EMPLYMENT" />
        <Tab icon={<PhoneIphoneIcon />} label="REFERANCE" />
      </Tabs>
      <Box role="tabpanel" hidden={tabValue !== 0} component={Paper} p={2}>
        {tabValue === 0 && (
          <>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Personal Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PersonalDetails />
                <AccordionActions>
                  <Button variant="contained">Save Info</Button>
                </AccordionActions>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Education</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Education />
                <AccordionActions>
                  <Button variant="contained">Save Info</Button>
                </AccordionActions>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Box>
      <Box role="tabpanel" hidden={tabValue !== 1}>
        {tabValue === 1 && (
          <>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Academic Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Traning Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Professional Certification</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Box>
      <Box role="tabpanel" hidden={tabValue !== 2}>
        {tabValue === 2 && (
          <>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Employment History</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Employment History(For Retired Army Person)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            
          </>
        )}
      </Box>
    </Box>
  );
};

export default TabsView;
