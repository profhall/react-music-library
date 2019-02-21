import React from 'react';
import {NavLink, Route} from "react-router-dom";
import AlbumList from "./AlbumList"



const ArtistList = (props) => {
    const artists = props.artists.map((artist,i)=>
        <li>
            <NavLink to={`${props.match.path}/${artist.id}`} key={i} >{artist.name}</NavLink>
            <div>
                <Route
                    path={`${props.match.path}/${artist.id}`}
                    render = {(props)=>
                        <AlbumList
                            {...props}
                            artist={artist.id}
                        />
                    }
                />
            </div>
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
