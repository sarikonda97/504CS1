import React, { useState } from 'react';
import './App.css';
import SearchBar from "material-ui-search-bar";
import RESTCaller from './../../helper'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';
import ToggleButton from '@material-ui/core/Switch';
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import Results from "./Results";
import Home from "./Home";
import SinglePage from './SinglePage';
// import Sample from "./components/Sample";
// import Something from "./components/Something";
// import NoMatch from "./components/NoMatch";

function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [toggle, setToggle] = useState(true);

//   const handleInputChange = async (searchQuery) => {
//     // eslint-disable-next-line no-console
//     console.log('searchQuery');
    
//     const searchUrl = ` https://bazinganews.herokuapp.com/searchresults/?search=${searchQuery}`;
//     const headers = { };

//     const data = await RESTCaller(searchUrl, headers);

//     console.log(data)
// };
// const sideBarClickHandler = async (genre) => {
//   console.log("side bar clicked" + genre);

//   const searchUrl = ` https://bazinganews.herokuapp.com/searchresults/?search=${genre}`;
//     const headers = { };

//     const data = await RESTCaller(searchUrl, headers);
//     console.log(data)
// }


  return (
    <div>
      {/* <div className="link-container">
        <NavLink activeClassName="active" to="/results">
          Results
        </NavLink>
      </div> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route 
          path="/results"
          exact
          component={Results}
        />
        <Route path="/singlePage" exact component={SinglePage}/>
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} />
        <Route path="/something" component={Something} />
        <Route path='/default' render={() => <Redirect to= "/" />} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
}

export default App;
