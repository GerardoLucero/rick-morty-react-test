import React from 'react'
import PropTypes from 'prop-types'
//Material-UI
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
  
  
  function Charaters(props) {
    const { classes, children } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3} justify={"center"}>
          <Grid item xs={12} sm={8} md={6}>
            {children}
          </Grid>
        </Grid>
      </div>
    );
  }
  
  Charaters.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Charaters);