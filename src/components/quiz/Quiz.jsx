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
    Blm: false,
    Covid: false,
    Homelessness: false,
    Disability:false,
    Health: false,
    Voting: false,
    Immigration: false,
    Refugee: false,
    Education: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Animals, Environment, Blm, Covid, Homelessness, Disability, Health, Voting, Immigration, Refugee, Education } = state;
  const error = [Animals, Environment, Blm, Covid, Homelessness, Disability, Health, Voting, Immigration, Refugee, Education].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">What causes are you interested in</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={Animals} onChange={handleChange} name="Animals" />}
            label="Animals"
          />
          <FormControlLabel
            control={<Checkbox checked={Environment} onChange={handleChange} name="Environment" />}
            label="Environment"
          />
          <FormControlLabel
            control={<Checkbox checked={Blm} onChange={handleChange} name="Blm" />}
            label="Blm"
          />
          <FormControlLabel
            control={<Checkbox checked={Covid} onChange={handleChange} name="Covid" />}
            label="Covid"
          />
          <FormControlLabel
            control={<Checkbox checked={Homelessness} onChange={handleChange} name="Homelessness" />}
            label="Homelessness"
          />
          <FormControlLabel
            control={<Checkbox checked={Disability} onChange={handleChange} name="Disability" />}
            label="Disability"
          />
          <FormControlLabel
            control={<Checkbox checked={Health} onChange={handleChange} name="Health" />}
            label="Health"
          />
          <FormControlLabel
            control={<Checkbox checked={Voting} onChange={handleChange} name="Voting" />}
            label="Voting"
          />
          <FormControlLabel
            control={<Checkbox checked={Immigration} onChange={handleChange} name="Immigration" />}
            label="Immigration"
          />
          <FormControlLabel
            control={<Checkbox checked={Refugee} onChange={handleChange} name="Refugee" />}
            label="Refugee"
          />
          <FormControlLabel
            control={<Checkbox checked={Education} onChange={handleChange} name="Education" />}
            label="Education"
          />
        </FormGroup>
        <FormHelperText>Be mindful</FormHelperText>
      </FormControl>
      
     
    </div>
  );
}
