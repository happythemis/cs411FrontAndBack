import React, {useState, useEffect}from 'react';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const MyInfo= (props) => {
  const classes = useStyles();
  // const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  // const [tried_login, setTried_login] = useState(0)
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if(props.ls){
      fetch("/myplaylist?email="+props.email)
      .then(response => response.json())
      .then(data => {setPlaylist(data);});
    }
  }, []);

  return (
    <Container component="main">
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={3}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              MY Playlist URI
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="my_uri"
                label="type my uri"
                name="my_uri"
                autoComplete="my_uri"
                autoFocus
              />
          

            <Typography component="h1" variant="h5">
              username
            </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="my_uri"
                label="type my uri"
                name="my_uri"
                autoComplete="my_uri"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                submit
              </Button>
            </form>


            <form className={classes.form} noValidate>
            <Typography component="h1" variant="h6">
              Remove Song from the list
            </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="my_uri"
                label="type my uri"
                name="my_uri"
                autoComplete="my_uri"
                autoFocus
              />
          
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Remove
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className={classes.paper}>
          <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {/* <TableCell align="right">Song Order</TableCell> */}
                    <TableCell align="right">Song id</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Album</TableCell>
                    <TableCell align="right">Year</TableCell>
                    <TableCell align="right">Artist</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {playlist.map((playlist) => (
                    <TableRow key={playlist.name}>
                      <TableCell align="right">{playlist.song_id}</TableCell>
                      <TableCell align="right">{playlist.song_name}</TableCell>
                      <TableCell align="right">{playlist.song_album}</TableCell>
                      <TableCell align="right">{playlist.song_year}</TableCell>
                      <TableCell align="right">{playlist.song_artist}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
        
      </Grid>
    </Container>
  );
}
export default MyInfo;