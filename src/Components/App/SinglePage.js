import { useEffect, useState } from "react";
import RESTCaller from '../../helper';
const SinglePage = (props) => {
    const [data, setData] = useState('');
    useEffect(async()=>{
        const searchUrl = `https://bazinganews.herokuapp.com/detailnews/?url=${props.location.searchKey.searchPhrase.text}`;
        const headers = {};
        setData(await RESTCaller(searchUrl, headers));
    },[]);
    try {
    return (
        <div style={{margin: "30px"}}>
            <h2 style={{border: "3px solid black", padding: "10px"}}>{props.location.searchKey.title}</h2>
            <div style={{"width": "75%", display: "inline-block", verticalAlign: "top", padding: "2%"}}>
                <img src={props.location.searchKey.urlToImage} width="100%" height="500px"/>
                <p style={{textAlign: "justify"}}>{data.fullcontent}</p>
            </div>
            <div style={{"width": "17%", display:"inline-block", padding: "2%"}}>
                <div style={{padding: "30px", border: "1px solid black", height: "400px", background: "black"}}></div>
            </div>
        </div>
    )
    } catch(error) {
        window.location.href = "/";
    }
}

export default SinglePage;