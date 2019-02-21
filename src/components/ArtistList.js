import React from 'react';
import {NavLink} from "react-router-dom";
import AlbumList from "./AlbumList"



const ArtistList = (props) => {
    const artists = props.artists.map((artist,i)=>
        <li>
            <NavLink to={`${props.match.path}/${artist.id}`} key={i} onClick={()=>console.log(artist.name)}>{artist.name}</NavLink>
        </li>
    );
    // console.log(props);
    // console.log(artists);
    return (

        <div>
            <ul>
                <label><b>Listed Artists</b></label>
                {artists}
            </ul>
            <ul>
                <label><b>Artist Albums</b></label>
                <AlbumList/>

            </ul>

        </div>
    );
};

export default ArtistList;
