import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ToggleButton from '@material-ui/core/Switch';
import SearchBar from "material-ui-search-bar";
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import RESTCaller from './../../helper';

const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [toggle, setToggle] = useState(true);
  const [topData, setTopData] = useState([{},{},{},{}]);

  useEffect(async ()=> {
    const searchUrl = `https://bazinganews.herokuapp.com/topheadlines/`;
    const headers = {};
    let data = await RESTCaller(searchUrl, headers);
    setTopData(data.articles.slice(0,4));
  },[]);

  useEffect(()=> {
    let el = document.getElementsByClassName('link-container')[0];
    el.id = toggle ? 'marginLeft300' : 'marginLeft0';
  },[toggle])

  const handleInputChange = async (searchQuery) => {
    // eslint-disable-next-line no-console
    // console.log('searchQuery');

    // const searchUrl = ` https://bazinganews.herokuapp.com/searchresults/?search=${searchQuery}`;
    // const headers = {};

    // const data = await RESTCaller(searchUrl, headers);

    // console.log(data)

    window.location.href = "/results?text=" + searchQuery;
  };
  const sideBarClickHandler = async (genre) => {
    // console.log("side bar clicked" + genre);

    // const searchUrl = ` https://bazinganews.herokuapp.com/searchresults/?search=${genre}`;
    // const headers = {};

    // const data = await RESTCaller(searchUrl, headers);
    // console.log(data)
  }

  return (
    <div>
      <Drawer
        className={"drawer"}
        variant="persistent"
        classes={{
          paper: "drawerPaper",
        }}
        anchor="left"
        open={toggle}
      >
        {/* <div className={toolbar} /> */}
        <List className="search-here">

          <ListItem button key={"Search Here"}>
            <ListItemText primary={"Search Here"} />
          </ListItem>
          <Divider />
        </List>
        <List>
          {['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'].map((text, index) => (
            <React.Fragment key={index}>
              <ListItem button key={text} className="side-bar-elements">
                {/* <ListItemText primary={text} onClick={() => {sideBarClickHandler(text);}}/> */}
                <NavLink activeClassName="active" to={{
                  pathname: '/results',
                  searchKey: {
                    searchPhrase: { text }
                  }
                }}>
                  {text}
                </NavLink>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <div className="headingWrapper">
        <h1 className="heading">AI Gazette</h1>
        <SearchBar className="search-bar"
          value={searchQuery}
          onChange={(newValue) => setSearchQuery(newValue)}
          onRequestSearch={() => handleInputChange(searchQuery)}
        />
      </div>
      <div className="trending-news">
        <h2><span>
          <ToggleButton
            checked={toggle}
            onChange={() => { console.log("clicked search here"); toggle === true ? setToggle(false) : setToggle(true); }}
            color="primary"
            name="checkedB"
          /></span>Trending News </h2>
        <span></span>
        <p className="curly-brace">{"{"}</p>
        <span className="dot-blue"></span>
        <span className="dot-text">Hero</span>
        <span className="dot-red"></span>
        <span className="dot-text">Villain</span>
        <span className="dot"></span>
        <span className="dot-text">Victim</span>
        <p className="curly-brace">{"}"}</p>
      </div>
      <div className="link-container">
        {/* <NavLink activeClassName="active" to="/results">
            Results
          </NavLink> */}
        <div style={{display: 'inline-block', width: "35%", verticalAlign: "top"}}>
          <NavLink activeClassName="active" to={{
                  pathname: '/singlePage',
                  searchKey: {
                    title: topData[0].title ,
                    urlToImage: topData[0].urlToImage,
                    description: topData[0].description,
                    searchPhrase: { text: topData[0].url }
                  }
                }}>
          <div style={{padding: "10px"}}>
            <img src={topData[0].urlToImage} width="100%" height="200px"/>
            <h4>{topData[0].title}</h4>
            <p>{topData[0].description}</p>
            <p>{topData[0].content}</p>
          </div>
          </NavLink>
        </div>
        <div style={{display: 'inline-block', width: "30%", verticalAlign: "top"}}>
          <NavLink activeClassName="active" to={{
                  pathname: '/singlePage',
                  searchKey: {
                    title: topData[1].title ,
                    urlToImage: topData[1].urlToImage,
                    description: topData[1].description,
                    searchPhrase: { text: topData[1].url }
                  }
                }}>
          <div style={{padding: "10px"}}>
            <img src={topData[1].urlToImage} width="100%" height="200px"/>
            <h4>{topData[1].title}</h4>
            <p>{topData[1].description}</p>
            <p>{topData[1].content}</p>
          </div>
          </NavLink>
          <NavLink activeClassName="active" to={{
                  pathname: '/singlePage',
                  searchKey: {
                    title: topData[2].title ,
                    urlToImage: topData[2].urlToImage,
                    description: topData[1].description,
                    searchPhrase: { text: topData[1].url }
                  }
                }}>
          <div style={{padding: "10px"}}>
            <img src={topData[2].urlToImage} width="100%" height="200px"/>
            <h4>{topData[2].title}</h4>
            <p>{topData[2].description}</p>
            <p>{topData[2].content}</p>
          </div>
          </NavLink>
        </div>
        <div style={{display: 'inline-block', width: "35%", verticalAlign: "top"}}>
          <NavLink activeClassName="active" to={{
                  pathname: '/singlePage',
                  searchKey: {
                    title: topData[3].title ,
                    urlToImage: topData[3].urlToImage,
                    description: topData[3].description,
                    searchPhrase: { text: topData[3].url }
                  }
                }}>
          <div style={{padding: "10px"}}>
            <img src={topData[3].urlToImage} width="100%" height="200px"/>
            <h4>{topData[3].title}</h4>
            <p>{topData[3].description}</p>
            <p>{topData[3].content}</p>
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home;