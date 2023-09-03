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
import kitakyusyuArea from './SearchKitakyusyuArea';
import chikuhouArea from './SearchChikuhouArea';
import chikugoArea from './SearchChikugoArea';
import hokubu from '../json/Hokubu';
import chubu from '../json/Chubu';
import nanbu from '../json/Nanbu';
import ritou from '../json/Ritou';


export default function AreaAccordion(props) {
  return (
    <div>
        <Accordion sx={{ mb:2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            {/* <Typography>福岡都市圏エリア</Typography> */}
            <Typography>北部エリア</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {hokubu.hokubuArea.map((item, cityIndex) => (
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
          {/* <Typography>北九州エリア</Typography> */}
          <Typography>中部エリア</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {chubu.chubuArea.map((item, cityIndex) => (
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
          <Typography>南部エリア</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {nanbu.nanbuArea.map((item, cityIndex) => (
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
          <Typography>離島エリア</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
              <FormGroup>
                <Grid container>
                  {ritou.ritouArea.map((item, cityIndex) => (
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