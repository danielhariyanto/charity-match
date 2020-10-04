import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Animal: false,
    Environment: false,
    SocialJustice: false,
    Religion: false,
    blm: false,
    covid:false,
    housing: false,
    disability: false,
    health: false,

  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Animal, Environment, SocialJustice, Religion,  blm, covid, housing, disability, health } = state;
  const error = [Animal, Environment, SocialJustice, Religion, blm, covid, housing, disability, health].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">What causes are you interested in</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={Animal} onChange={handleChange} name="Animal" />}
            label="Animal"
          />
          <FormControlLabel
            control={<Checkbox checked={Environment} onChange={handleChange} name="Environment" />}
            label="Environment"
          />
          <FormControlLabel
            control={<Checkbox checked={SocialJustice} onChange={handleChange} name="SocialJustice" />}
            label="Social Justice"
          />
          <FormControlLabel
            control={<Checkbox checked={Religion} onChange={handleChange} name="Religion" />}
            label="Religion"
          />
          <FormControlLabel
            control={<Checkbox checked={blm} onChange={handleChange} name="blm" />}
            label="Black Lives Matter"
          />
          <FormControlLabel
            control={<Checkbox checked={covid} onChange={handleChange} name="covid" />}
            label="COVID-19 Relief"
          />
          <FormControlLabel
            control={<Checkbox checked={housing} onChange={handleChange} name="housing" />}
            label="Housing"
          />
          <FormControlLabel
            control={<Checkbox checked={disability} onChange={handleChange} name="disability" />}
            label="Disability"
          />
          <FormControlLabel
            control={<Checkbox checked={health} onChange={handleChange} name="health" />}
            label="Health"
          />
        </FormGroup>
        <FormHelperText>Be mindful</FormHelperText>
      </FormControl>
      
      {/* function checkAnswer(){
          for (var = 0; d<state.)
      } */}
     
    </div>
  );
}
