
import React from 'react';
import Unit from './Unit/Unit';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

const Units = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
        {props.result
                    .map ((element, index) =>(
            <Grid key={element["Security Code"]} item>
                 <Unit key={element["Security Code"]} name={element["Security Name"]} code={element["Security Code"]}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Units;