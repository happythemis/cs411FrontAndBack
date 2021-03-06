// import React , {Component} from 'react';

// export default function Create(){
//   return (
//     <nav className = "HomeNav">
//       <h1> Welcome Home</h1>
//     </nav>
//   )
// }
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Mypage() {
  const classes = useStyles();

  return (
    <Container component="main">
      {/* <CssBaseline /> */}
      <Grid container item xs={12} spacing={5}>
        <Grid item xs={3}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Search Friend
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="friend"
              label="search friend"
              name="friend"
              autoComplete="friend"
              autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
              Add to My Playlistd friend
            </Button>
            
          </form>
        </div>
        </Grid>

        <Grid item xs={3}>
          <Grid container item xs={12} spacing={3}>
            
          </Grid> 
         
          
        </Grid>
      </Grid>
      
     
    </Container>
  );
}
