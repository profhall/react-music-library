import React from 'react';
import {NavLink, Route} from "react-router-dom";
import AlbumList from "./AlbumList"

const ArtistListStyle = {

}

const ArtistList = (props) => {


    const artists = props.artists.map((artist,i)=>
        <li key={i}>
            <NavLink to={`${props.match.path}/${artist.id}`} >{artist.name}</NavLink>
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
                <Route
                    path={`${props.match.path}/:artistId`}
                    render = {({match})=>
                        <AlbumList
                            {...props}
                            artistID={match.params.artistId}
                        />

                    }
                />

            </ul>

        </div>
    );
};

export default ArtistList;
