

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import styles from './Quiz.module.css';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [cause, setCause] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCause(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.leftside}>
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        what topic are you most passionate about?      
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Cause</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          //open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cause}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Animal"}>Animal</MenuItem>
          <MenuItem value={"Environment"}>Environment</MenuItem>
          <MenuItem value={"Black-Lives-Matter"}>BLM</MenuItem>
          <MenuItem value={"COVID-19 Tracker"}>COVID-19</MenuItem>
          <MenuItem value={"Housing & Homelessness"}>Housing</MenuItem>
          <MenuItem value={"Disability"}>Disability</MenuItem>
          <MenuItem value={"Immigration"}>Immigration</MenuItem>
          <MenuItem value={"Voting Rights"}>Voting Rights</MenuItem>
          <MenuItem value={"Refugee Crisis"}>Refugee Crisis</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
            
        </Select>
      </FormControl>


      <Button className={classes.button} onClick={handleOpen}>
        Where are you located?
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">States</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          onClose={handleClose}
          onOpen={handleOpen}
          value={cause}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"AL"}>AL</MenuItem>
          <MenuItem value={"AK"}>AL</MenuItem>
          <MenuItem value={"AZ"}>AZ</MenuItem>
          <MenuItem value={"AR"}>AR</MenuItem>
          <MenuItem value={"CA"}>CA</MenuItem>
          <MenuItem value={"CO"}>CO</MenuItem>
          <MenuItem value={"CT"}>CT</MenuItem>
          <MenuItem value={"DE"}>DE</MenuItem>
          <MenuItem value={"DC"}>DC</MenuItem>
          <MenuItem value={"FL"}>FL</MenuItem>
          <MenuItem value={"GA"}>GA</MenuItem>
          <MenuItem value={"HI"}>HI</MenuItem>
          <MenuItem value={"ID"}>ID</MenuItem>
          <MenuItem value={"IL"}>IL</MenuItem>
          <MenuItem value={"IN"}>IN</MenuItem>
          <MenuItem value={"IA"}>IA</MenuItem>
          <MenuItem value={"KS"}>KS</MenuItem>
          <MenuItem value={"KY"}>KY</MenuItem>
          <MenuItem value={"LA"}>LA</MenuItem>
          <MenuItem value={"ME"}>ME</MenuItem>
          <MenuItem value={"MD"}>MD</MenuItem>
          <MenuItem value={"MA"}>MA</MenuItem>
          <MenuItem value={"MI"}>MI</MenuItem>
          <MenuItem value={"MN"}>MN</MenuItem>
          <MenuItem value={"MS"}>MS</MenuItem>
          <MenuItem value={"MO"}>MO</MenuItem>
          <MenuItem value={"MT"}>MT</MenuItem>
          <MenuItem value={"NE"}>NE</MenuItem>
          <MenuItem value={"NV"}>NV</MenuItem>
          <MenuItem value={"NH"}>NH</MenuItem>
          <MenuItem value={"NJ"}>NJ</MenuItem>
          <MenuItem value={"NM"}>NM</MenuItem>
          <MenuItem value={"NY"}>NY</MenuItem>
          <MenuItem value={"NC"}>NC</MenuItem>
          <MenuItem value={"ND"}>ND</MenuItem>
          <MenuItem value={"OH"}>OH</MenuItem>
          <MenuItem value={"OK"}>OK</MenuItem>
          <MenuItem value={"OR"}>OR</MenuItem>
          <MenuItem value={"PA"}>PA</MenuItem>
          <MenuItem value={"RI"}>RI</MenuItem>
          <MenuItem value={"SC"}>SC</MenuItem>
          <MenuItem value={"SD"}>SD</MenuItem>
          <MenuItem value={"TN"}>TN</MenuItem>
          <MenuItem value={"TX"}>TX</MenuItem>
          <MenuItem value={"UT"}>UT</MenuItem>
          <MenuItem value={"VT"}>VT</MenuItem>
          <MenuItem value={"VA"}>VA</MenuItem>
          <MenuItem value={"WA"}>WA</MenuItem>
          <MenuItem value={"WV"}>WV</MenuItem>
          <MenuItem value={"WI"}>WI</MenuItem>
          <MenuItem value={"WY"}>WY</MenuItem>







          

          
          
        </Select>
      </FormControl>

    
      

      <Button className={classes.button} onClick={handleOpen}>
          What do you do in your free time?
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Hobbies</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          //open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cause}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Animal"}>Volunteer at an animal shelter</MenuItem>
          <MenuItem value={"Environment"}> Plant trees in the neighborhood</MenuItem>
          <MenuItem value={"Health"}>Run a marathon for disease awareness</MenuItem>
          <MenuItem value={"Voting Rights"}>Watch the presidents</MenuItem>
          <MenuItem value={"Refugee Crisis"}>Refugee Crisis</MenuItem>
          <MenuItem value={"Education"}>Tutor kids</MenuItem>
        
        </Select>
      </FormControl>

      
    
    <Button className={classes.button} onClick={handleOpen}>
        What issue would you like to be discussed during the November presidential election?
      </Button>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Topics</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          //open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cause}
          onChange={handleChange}
        >xw
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          <MenuItem value={"Black-Lives-Matter"}>BLM</MenuItem>
          <MenuItem value={"Housing & Homelessness"}>Housing</MenuItem>
          <MenuItem value={"Disability"}>Disability</MenuItem>
          <MenuItem value={"Immigration"}>Immigration</MenuItem>
          <MenuItem value={"Refugee Crisis"}>Refugee Crisis</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
          
        </Select>
        
      </FormControl>
  </div>
    </div>
  );
  
}
