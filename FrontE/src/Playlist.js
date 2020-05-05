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
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { borders } from '@material-ui/system';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  paper2: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    // marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Playlist = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [curr_uri, set_uri] = useState("");
  const [userid, set_userid] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [groupid, setGroupId] = useState("");
  const [option, setOption] = React.useState('');

  const [top100, setTop100] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeTop100 = (event) => {
    setTop100({ ...top100, [event.target.name]: event.target.checked });
  };


  useEffect(() => {
    if(props.ls){
      fetch("/getplaylist?email="+props.email)
      .then(response => response.json())
      .then(data => {setPlaylist(data);});
    }
  }, []);

  const handleOptionChange = (event) => {
    // setPersonName(event.target.value);
    setOption(event.target.value);
   
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const levels = [
    'Low',
    'Medium',
    'High',
  ];



  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  function getStylesLevel(level, optionLevel, theme) {
    return {
      fontWeight:
      optionLevel.indexOf(level) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  function FormRowOption() {
    return (
      // <React.Fragment>
      <Grid container xs = {12}>
        <Grid item xs={4}>
          <div>
           <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Popularity</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={option}
                    onChange={handleOptionChange}
                    label="option"
                  >
                    <MenuItem value={10}>Low</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>High</MenuItem>
                  </Select>
           </FormControl>
           </div>
        </Grid>
        <Grid item xs={4}>
          <div>
        <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Danceability</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={option}
                    onChange={handleOptionChange}
                    label="option"
                  >
                    <MenuItem value={10}>Low</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>High</MenuItem>
                  </Select>
           </FormControl>
           </div>
        </Grid>
        <Grid item xs={4}>
          <div> 
        <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Energy</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={option}
                    onChange={handleOptionChange}
                    label="option"
                  >
                    <MenuItem value={10}>Low</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>High</MenuItem>
                  </Select>
           </FormControl>
           </div>
        </Grid>
      {/* </React.Fragment> */}
      </Grid>
    );
  }

  function FormRowMidTwo() {
    return (
      // <div className="container">
      <React.Fragment>
      {/* // <Grid display="flex" borderColor="primary.main" borderWidth="5px" flex-direction= "column" justify-content= "space-around"> */}
        <Grid >
          <FormControlLabel
            control={
              <Switch
                checked={top100.checkedB}
                onChange={handleChangeTop100}
                name="checkedB"
                color="primary"
              />
            }
            label="Top 100"
          />
         
        </Grid>
        <div className="container2" >or</div>
        <Grid >
                <Typography component="h5" variant="h6">
                   Playlist URI
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="uri"
                      label="uri"
                      type="uri"
                      id="curr_uri"
                      autoComplete="type uri"
                      value={curr_uri}
                      onChange={e => set_uri(e.target.value)}
                    />
                </form>
        </Grid>
        {/* // </Grid> */}
       </React.Fragment>
    );
  }

  function FormRowTopTwo() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
                <Typography component="h5" variant="h6" className={classes.title}>
                   my username
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="userid"
                    label="user id"
                    type="userid"
                    id="userid"
                    autoComplete="userid"
                    value={userid}
                    onChange={e => set_userid(e.target.value)}
                  />
              </form>
        </Grid>
        <Grid item xs={12}>
          <Typography component="h5" variant="h6" className={classes.title}>
                Create/Find Group Playlist
              </Typography>
              
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="groupid"
                  label="groupid"
                  type="groupid"
                  id="groupid"
                  autoComplete="type groupid"
                  value={groupid}
                  onChange={e => setGroupId(e.target.value)}
                />
              </form>
        </Grid>
      </React.Fragment>
    );
  }


  return (
    <Container component="main">
      <Grid container item xs={12} spacing={6}>
        
        {/* <Grid container item xs={6} spacing={2} > */}
        <Grid item xs = {6}>
           <div>
          {/* <div className={classes.paper}> */}
            <div className="container2">
             <FormRowTopTwo/>
            </div>
            {/* </div> */}
            <div className="container">
              <FormRowMidTwo/> 
            </div>
            {/* <Grid item xs = {12}> */}
            <div className="container">
            <Typography component="h5" variant="h6" className={classes.title}>
                  Option
            </Typography>
              <FormRowOption/>
            </div>
            </div>
        </Grid>


        <Grid item xs={6}>
          {/* this part would be the list of the songs */}
          <div className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {/* <TableCell align="right">Song Order</TableCell> */}
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Artist</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playlist.map((playlist) => (
                    <TableRow key={playlist.name}>
                      {/* <TableCell align="right">{playlist.song_order}</TableCell> */}
                      <TableCell align="right">{playlist.song_name}</TableCell>
                      <TableCell align="right">{playlist.song_author}</TableCell>
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
export default Playlist;


