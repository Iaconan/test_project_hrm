
import React from 'react'
import {  Button } from '@material-ui/core/';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { Link } from 'react-router-dom';
import useStyles from './styleNote';

const NoteAdded = () => {
  const classes = useStyles();
  return (
    <div>

    <div className={classes.title} elevation={6}>
    <h3 raised elevation={6}>The note is successfully added to you memories App</h3>
    </div>
    <div className={classes.card}>
    <Button component={Link} to="/" size="large" color="success" onClick={() => {}}>
            <AirplanemodeActiveIcon fontSize="medium" /> &nbsp; Watch the lists
          </Button>

    </div>
    </div>

  )
}

export default NoteAdded