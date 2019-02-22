import React from 'react';

const AlbumList = (props) => {
    console.log(props);

    const artist = props.artists.find(artist =>
        (artist.id === Number(props.artistID) )
    );

    const Artistalbums = artist.albums.map((album,i) =>(
        <li key={i}>
            {album.title}
        </li>
        )
    );

    return (
        <ul>
            {/*{props.artistID}*/}
            {/*{console.log(artist.albums)}*/}
            {Artistalbums}
        </ul>
    );
};

export default AlbumList;
