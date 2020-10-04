

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import styles from './Quiz.module.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
const styless = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

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

      <Button className={classes.button} >
          What do you do like to do in your free time?
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">hobbies</InputLabel>
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
          <MenuItem value={"Animal"}><em>Volunteer at an animal shelter</em></MenuItem>
          <MenuItem value={"Environment"}> Plant trees in the neighborhood</MenuItem>
          <MenuItem value={"Health"}>Run a marathon for disease awareness</MenuItem>
          <MenuItem value={"Voting Rights"}>Watch the presidents</MenuItem>
          <MenuItem value={"Refugee Crisis"}>Refugee Crisis</MenuItem>
          <MenuItem value={"Education"}>Tutor kids</MenuItem>
        
        </Select>
      </FormControl>

      
    
    <Button className={classes.button}>
        What issue would you like to be discussed during the November presidential election?
      </Button>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">topics</InputLabel>
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
          
          <MenuItem value={"Black-Lives-Matter"}>BLM</MenuItem>
          <MenuItem value={"Housing & Homelessness"}>Housing</MenuItem>
          <MenuItem value={"Disability"}>Disability</MenuItem>
          <MenuItem value={"Immigration"}>Immigration</MenuItem>
          <MenuItem value={"Refugee Crisis"}>Refugee Crisis</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
          
        </Select>
        
      </FormControl>



      <Button className={classes.button}>
      What are some subjects you enjoy learning about?
      </Button>

      <FormControl className={classes.formControl}>
   <InputLabel id="demo-controlled-open-select-label">subjects</InputLabel> 
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
          
          <MenuItem value={"Health"}>Healthcare</MenuItem>
          <MenuItem value={"Disability"}>Accessibility in our world</MenuItem>
          <MenuItem value={"Animal"}>Animals</MenuItem>
          <MenuItem value={"Voting Rights"}>Politics </MenuItem>
          
        </Select>
        
      </FormControl>



      <Button className={classes.button} >
      What is a movie you love?
      </Button>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">movies</InputLabel>
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
          
          <MenuItem value={"Environment"}>WALL-E </MenuItem>
          <MenuItem value={"Disability"}>Wonder </MenuItem>
          <MenuItem value={"Housing & Homeslessness"}>The Pursuit of Happiness</MenuItem>
          <MenuItem value={"Refugee Crisis"}>Human Flow </MenuItem>
          <MenuItem value={"Animal"}>Rio</MenuItem>
          
        </Select>
        
      </FormControl>



      <Button className={classes.button}>
      If you could solve any of the following issues in 5 years time, which one would you solve?
      </Button>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">issues</InputLabel>
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
          
          <MenuItem value={"COVID-19 Tracker"}>Covid-19</MenuItem>
          <MenuItem value={"Immigration"}>Immigration </MenuItem>
          <MenuItem value={"Black-Lives-Matter"}>Racial Justice</MenuItem>
          <MenuItem value={"Housing & Homelessness"}>Housing & Homelessness</MenuItem>
          <MenuItem value={"Health"}>Healthcare Access</MenuItem>
          <MenuItem value={"Education"}>Education Access</MenuItem>
        </Select>
        
      </FormControl>


  </div>
  
      <Button variant="contained" color = "primary">find my charity</Button>
    </div>
 
  
  
  );


  

  
}
