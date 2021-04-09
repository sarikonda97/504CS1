import { useEffect, useState } from "react";
import RESTCaller from '../../helper'; 
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from "react-router-dom";
const Results = (props) => {
    const [noOfResults, setNoOfResults] = useState(0);
    const [results, setResults] = useState([]);
    useEffect(async()=>{
        const searchUrl = `https://bazinganews.herokuapp.com/searchresults/?search=${text}`;
        const headers = {};
        let data = await RESTCaller(searchUrl, headers);
        setResults(data.articles);
        setNoOfResults(data.totalResults);
    },[]);
    try {
        var text = "";
        try{ 
            text = props.location.searchKey.searchPhrase.text;
        } catch(error) {
            text = window.location.href.split("text=")[1];
        }
        return (
            <div style={{padding: '1%'}}>
                <h4> Here are {noOfResults} for the word {text} </h4>
                {results.map((item, index) => {
                    return (
                        <div style={{padding: "10px"}} key={index}>
                            <NavLink activeClassName="active" to={{
                                pathname: '/singlePage',
                                searchKey: {
                                    title: item.title ,
                                    urlToImage: item.urlToImage,
                                    description: item.description,
                                    searchPhrase: { text: item.url }
                                }
                                }}>
                                <div>
                                    <div style={{display:"inline-block", width: "7%", verticalAlign: "top"}}>
                                        <Avatar src={item.urlToImage} height="100px" width="100px"/>
                                    </div>
                                    <div style={{display: "inline-block", width: "90%", marginLeft: "10px"}}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        )
    } catch(error) {
        window.location.href = "/";
    }
}

export default Results;