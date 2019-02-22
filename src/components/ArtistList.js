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
                    render = {({match})=>{
                        const artist = props.artists.find(artist => artist.id === Number(match.params.artistId));
                        return( <AlbumList{...props} albums={artist.albums}/>  )
                        }


                    }
                />

            </ul>

        </div>
    );
};

export default ArtistList;
