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
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Animal, Environment, SocialJustice, Religion } = state;
  //const error = [Animal, Environment, SocialJustice, Religion].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">What causes are you interested</FormLabel>
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
        </FormGroup>
        <FormHelperText>Be mindful</FormHelperText>
      </FormControl>
     
    </div>
  );
}
