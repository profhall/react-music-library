import React from 'react';

const AlbumList = (props) => {
    const Artistalbums = props.albums.map((album,i) =>(
        <li key={i}>
            {album.title}
        </li>
        )
    );

    return (
        <ul>
            {Artistalbums}
        </ul>
    );
};

export default AlbumList;
