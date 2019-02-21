import React from 'react';
import {NavLink} from "react-router-dom";



const ArtistList = (props) => {
    const artists = props.artists.map((artist,i)=>
        <li>
            <NavLink to={`${props.match.path}/${artist.id}`} key={i} onClick={()=>console.log(artist.name)}>{artist.name}</NavLink>
        </li>
    );
    // console.log(props);
    // console.log(artists);
    return (

        <ul>
            {artists}
        </ul>
    );
};

export default ArtistList;
