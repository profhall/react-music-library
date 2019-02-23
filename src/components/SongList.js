import React from 'react';

const Songlist = (props) => {

    const songList = props.songList.map((song,i) => (
        <li key={i}>
            {song.title}
            {song.length}
            {song.rating}

        </li>
        )
    );
    return (
        <ul>
            <label><b>{props.albumTitle}</b></label>
            {songList}
        </ul>
    );
};

export default Songlist;
