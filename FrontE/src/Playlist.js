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
    maxWidth: 300,
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
  // state = { value: [] };

  useEffect(() => {
    if(props.ls){
      fetch("/getplaylist?email="+props.email)
      .then(response => response.json())
      .then(data => {setPlaylist(data);});
    }
  }, []);

  const [personName, setPersonName] = React.useState([]);
  const [optionLevel, setOptionLevel] = React.useState([]);

  const handleChange = (event) => {
    // setPersonName(event.target.value);
    setAge(event.target.value);
   
  };

  const handleChangeLevel = (event) => {
    setOptionLevel(event.target.value);
    
   
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
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

  const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  
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

  return (
    
    <Container component="main">
      <Grid container item xs={12} spacing={5}>
        <Grid item xs={3}>
          <div className={classes.paper}>
            <span>
              <Typography component="h5" variant="h6">
                my username
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
            {/* </span>
            <span> */}
              <Typography component="h5" variant="h6">
                Create/Find Group Playlist
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
            </span>
            

            
            
          </div>
        </Grid>
        <Grid item xs={3}>
            <div className={classes.paper}>
              <Typography component="h5" variant="h5">
                choose the type
              </Typography>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                id="by_artist"
                className={classes.submit}
              >
                General
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                id="by_random"
                className={classes.submit}
              >
                Dance/Party
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"d
                id="by_artist"
                className={classes.submit}
              >
                Workout
              </Button>
            
            </div>
          </Grid>
        <Grid item xs={3}>
         <div className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Song Order</TableCell>
                    <TableCell align="right">Song Name</TableCell>
                    <TableCell align="right">Artist</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playlist.map((playlist) => (
                    <TableRow key={playlist.name}>
                      <TableCell align="right">{playlist.song_order}</TableCell>
                      <TableCell align="right">{playlist.song_name}</TableCell>
                      <TableCell align="right">{playlist.song_author}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className={classes.paper}>
         <div>
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Popularity</InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={optionLevel}
                onChange={handleChangeLevel}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} className={classes.chip} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {levels.map((level) => (
                  <MenuItem key={level} value={level} style={getStyles(level, optionLevel, theme)}>
                    {level}n
                    
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
             <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Low</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>High</MenuItem>
            </Select>
          </FormControl>
 
          </div>
          
          {/* <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Dancability</InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} className={classes.chip} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Energy</InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} className={classes.chip} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}
         
          </div>
       
        </Grid>

      </Grid>
      
     
    </Container>
  );
}
export default Playlist;