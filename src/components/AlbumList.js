import React from 'react';
import {NavLink, Route} from "react-router-dom";
import Songlist from './SongList'


const AlbumList = (props) => {
    const Artistalbums = props.albums.map((album,i) =>(
        <li key={i}>
            <NavLink to={`${props.match.path}/${props.artistID}/album/${album.id}`}>{album.title}</NavLink>
        </li>
        )
    );

    return (
        <div>
        <ul>
            {Artistalbums}
        </ul>
            <ul>
                <Route
                    path={`${props.match.path}/${props.artistID}/album/:albumId`}
                    render =
                        {
                            ({match})=> {
                                const album = props.albums.find(album => album.id === Number(match.params.albumId));
                                return( <Songlist {...props} songList={album.songs} albumTitle={album.title} />  )
                            }
                        }
                />
            </ul>

        </div>
    );
};

export default AlbumList;
