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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Education from "./Education";
import PersonalDetails from "./personal-details/PersonalDetails";
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SubjectIcon from '@mui/icons-material/Subject';
import AddressDetails from "./personal-details/AddressDetails";
import CareerAndApplication from "./personal-details/CareerAndApplication";
import PreferredAreas from "./personal-details/PreferredAreas";

const TabsView: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleChangePanel = (isExpaned: boolean, panel: string) => {
    setExpanded(isExpaned ? panel : false);
  };

  return (
    <Box component={Paper} p={2} width={"50%"} m={"0 auto"}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="icon label tabs example"
        sx={{ m: "0 auto" }}
        textColor="secondary"
        indicatorColor="secondary"
        centered
      >
        <Tab icon={<PersonIcon  />} label="PERSONAL" />
        <Tab icon={<SchoolIcon />} label="EDUCATION/TRAINING" />
        <Tab icon={<PermContactCalendarIcon />} label="EMPLYMENT" />
        <Tab icon={<SubjectIcon />} label="OTHER INFORMATION" />
      </Tabs>
      <Box
        role="tabpanel"
        hidden={tabValue !== 0}
        component={Paper}
        p={2}
        elevation={3}
      >
        {tabValue === 0 && (
          <>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel1")
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1-header"
                aria-controls="panel1-content"
              >
                <Typography>Personal Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PersonalDetails />
                <AccordionActions>
                  <Button variant="contained">Save Info</Button>
                </AccordionActions>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel2")
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel2-header"
                aria-controls="panel2-content"
              >
                <Typography>Address Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AddressDetails />
                <AccordionActions>
                  <Button variant="contained">Save Info</Button>
                </AccordionActions>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel3")
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel2-header"
                aria-controls="panel2-content"
              >
                <Typography>Career and Application Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CareerAndApplication />
                <AccordionActions>
                  <Button variant="contained">Save Info</Button>
                </AccordionActions>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel4")
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel2-header"
                aria-controls="panel2-content"
              >
                <Typography>Preferred Areas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PreferredAreas />
                <AccordionActions>
                  <Button variant="contained">Save Info</Button>
                </AccordionActions>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel5")
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel2-header"
                aria-controls="panel2-content"
              >
                <Typography>Other Relevant</Typography>
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
      <Box
        role="tabpanel"
        hidden={tabValue !== 1}
        component={Paper}
        p={2}
        elevation={3}
      >
        {tabValue === 1 && (
          <>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel6")
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel6-header"
                aria-controls="panel6-content"
              >
                <Typography>Academic Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "pane7"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "pane7")
              }>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} id="pane7-header"
                aria-controls="pane7-content">
                <Typography>Traning Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel8"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel8")
              }>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} id="pane8-header"
                aria-controls="pane8-content">
                <Typography>Professional Certification Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Box>
      <Box
        role="tabpanel"
        hidden={tabValue !== 2}
        component={Paper}
        p={2}
        elevation={3}
      >
        {tabValue === 2 && (
          <>
            <Accordion expanded={expanded === "panel9"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel9")
              } >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel9-header"
                aria-controls="panel9-content"
              >
                <Typography>Employment History</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel10"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel10")
              }>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel10-header"
                aria-controls="pane10-content"
              >
                <Typography>
                  Employment History(For Retired Army Person)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Box>
      <Box
        role="tabpanel"
        hidden={tabValue !== 3}
        component={Paper}
        p={2}
        elevation={3}
      >
        {tabValue === 3 && (
          <>
            <Accordion expanded={expanded === "panel11"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel11")
              }>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel11-header"
                aria-controls="panel11-content"
              >
                <Typography>Skill</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel12"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel12")
              }>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel12-header"
                aria-controls="panel12-content"
              >
                <Typography>Language Proficiency</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel13"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel13")
              }>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel3-header"
                aria-controls="panel3-content"
              >
                <Typography>Link Acoounts</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Education />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel14"}
              onChange={(e, isExpaned) =>
                handleChangePanel(isExpaned, "panel14")
              }>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel4-header"
                aria-controls="panel4-content"
              >
                <Typography>References</Typography>
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
