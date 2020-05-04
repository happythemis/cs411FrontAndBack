import './App.css';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import ChangePwd from './ChangePwd'
import DeleteAccount from './DeleteAccount'
import React, {useState} from "react";
import Create from './Create'
import MyInfo from './MyInfo'
import Mypage from './Mypage'
import Playlist from './Playlist'
import MyPlaylist from './Playlist2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HUE from '@material-ui/core/colors';
// import { createMuiTheme } from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/styles'




const useStyles = makeStyles(theme => ({
  root: {
        flexGrow: 1,
        // backgroundColor: #3f5a90,
        // backgroundColor: "DodgerBlue",
        // backgroundColor: '#00796b',
        // backgroundColor: "Green",
        // height: '100%',
        // display: "full",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // backgroundColor: theme.palette.secondary.main,
  },
  // avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  // },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function App() {
  const classes = useStyles();

  // 0->Not login;  1->Logged in
  const [login_status, change_login_status] = useState(0);
  const [login_email, change_login_email] = useState('');
  const [login_name, change_login_name] = useState('');
  const isBackgroundRed = true;

  function FormRow() {
    return (
        <form className={classes.form} noValidate>
        {login_status ? (
          <navi>
          <ul className ="nav-links">
            <Link to="/myfavoritesongs">
              <li>My Fav Song</li>
            </Link>
            <Link to="/playlist">
              <li>Playlist</li>
            </Link>
            <Link to="/changepwd">
              <li>Change Password</li>
            </Link>
            <Link to="/deleteaccount">
              <li>Delete Account</li>
            </Link>
          </ul>
        </navi>
      ):(
        // // Menu for NOT Signed in Status
        <navi>
          <ul className ="nav-links">
            <Link to="/">
              <li>Playlistd</li>
            </Link>
            <Link to="/signin">
              <li>Sign In</li>
            </Link>
            <Link to="/signup">
              <li>Sign Up</li>
            </Link>
          </ul>
        </navi>
          
      )}
      </form>
      
      
    );
  }
  
  return (
      <Router>
        <div className="App">
          {/* <Nav/> */}
          <FormRow/>
          <Switch>
            <Route exact path="/" component={Playlist}/>
            <Route
              path="/signin"
              render={(props) => <SignIn {...props} cls={change_login_status} ls={login_status}
              cle={change_login_email} cln={change_login_name} ln={login_name}/>}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route
              path="/changepwd"
              render={(props) => <ChangePwd {...props} ls = {login_status} email={login_email}/>}
            />
            <Route 
              path="/deleteaccount"
              render={(props) => <DeleteAccount {...props} cls={change_login_status} ls={login_status}
              cle={change_login_email} cln={change_login_name} email={login_email}/>}
            />
            <Route path="/myfavoritesongs" exact component={MyInfo}/>
            <Route path="/playlist" exact component={Playlist}/>
            
          
          </Switch>

        </div>
      </Router>
      
    // <div className="App">
    //   <header className="App-header">
    //     {/* <div className={classes.root}>  */}
    //       {/* <FormRow /> */}
    //      {/* </div> */}
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
  );
}

