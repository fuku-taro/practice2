import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import LocationModal from './LocationModal';
import fukuokaArea from './SearchFukuokaArea';
import kitakyusyuArea from './SearchKitaKyusyuArea';
import chikuhouArea from './SearchChikuhouArea';
import chikugoArea from './SearchChikugoArea';


export default function AreaAccordion(props) {
  console.log(props.kitakyusyuAreaData);
  return (
    <div>
        <Accordion sx={{ mb:2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <Typography>福岡都市圏エリア</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {props.fukuokaAreaData.slice(0,7).map((item, cityIndex) => (
                    <Grid item xs={12} md={4} key={cityIndex}>
                      <FormControlLabel
                        control={<Checkbox name={item.cityName} sx={{ px: 2 }} />}
                        label={item.cityName}
                        onChange={props.handleCheckboxChange}
                      />
                    </Grid>
                  ))}
                  </Grid>
                <Grid container>
                  {props.fukuokaAreaData.slice(7).map((item, cityIndex) => (
                    <Grid item xs={12} md={4} key={cityIndex}>
                      <FormControlLabel
                        control={<Checkbox name={item.cityName} sx={{ px: 2 }} />}
                        label={item.cityName}
                        onChange={props.handleCheckboxChange}
                      />
                    </Grid>
                  ))}
                  </Grid>
              </FormGroup>
              <LocationModal
                fukuokaAreaData={props.fukuokaAreaData}
                kitakyusyuAreaData={props.kitakyusyuAreaData}
                chikuhouAreaData={props.chikugoAreaData}
                chikugoAreaData={props.chikugoAreaData}
                handleCheckboxChange={props.handleCheckboxChange}
                isButtonDisabled={props.isButtonDisabled}
                label={props.label}
                labels={props.labels}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      <Accordion sx={{ mb:2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>北九州エリア</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {props.kitakyusyuAreaData.slice(0,7).map((item, cityIndex) => (
                    <Grid item xs={12} md={4} key={cityIndex}>
                      <FormControlLabel
                        control={<Checkbox name={item.cityName} sx={{ px: 2 }} />}
                        label={item.cityName}
                        onChange={props.handleCheckboxChange}
                      />
                    </Grid>
                  ))}
                  </Grid>
                  <Grid container>
                  {props.kitakyusyuAreaData.slice(7).map((item, cityIndex) => (
                    <Grid item xs={12} md={4} key={cityIndex}>
                      <FormControlLabel
                        control={<Checkbox name={item.cityName} sx={{ px: 2 }} />}
                        label={item.cityName}
                        onChange={props.handleCheckboxChange}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
              <LocationModal
              fukuokaAreaData={props.fukuokaAreaData}
              kitakyusyuAreaData={props.kitakyusyuAreaData}
              chikuhouAreaData={props.chikugoAreaData}
              chikugoAreaData={props.chikugoAreaData}
                handleCheckboxChange={props.handleCheckboxChange}
                isButtonDisabled={props.isButtonDisabled}
                labels={props.labels}
              />
            </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb:2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>筑豊エリア</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {props.chikuhouAreaData.map((item, cityIndex) => (
                    <Grid item xs={12} md={4} key={cityIndex}>
                      <FormControlLabel
                        control={<Checkbox name={item.cityName} sx={{ px: 2 }} />}
                        label={item.cityName}
                        onChange={props.handleCheckboxChange}
                      />
                    </Grid>
                  ))}
                  </Grid>
              </FormGroup>
              <LocationModal
              fukuokaAreaData={props.fukuokaAreaData}
              kitakyusyuAreaData={props.kitakyusyuAreaData}
              chikuhouAreaData={props.chikugoAreaData}
              chikugoAreaData={props.chikugoAreaData}
                handleCheckboxChange={props.handleCheckboxChange}
                isButtonDisabled={props.isButtonDisabled}
                labels={props.labels}
              />
            </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>筑後エリア</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {props.chikugoAreaData.map((item, cityIndex) => (
                    <Grid item xs={12} md={4} key={cityIndex}>
                      <FormControlLabel
                        control={<Checkbox name={item.cityName} sx={{ px: 2 }} />}
                        label={item.cityName}
                        onChange={props.handleCheckboxChange}
                      />
                    </Grid>
                  ))}
                  </Grid>
              </FormGroup>
              <LocationModal
              fukuokaAreaData={props.fukuokaAreaData}
              kitakyusyuAreaData={props.kitakyusyuAreaData}
              chikuhouAreaData={props.chikugoAreaData}
              chikugoAreaData={props.chikugoAreaData}
                handleCheckboxChange={props.handleCheckboxChange}
                isButtonDisabled={props.isButtonDisabled}
                labels={props.labels}
              />
            </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}