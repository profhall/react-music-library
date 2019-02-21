import React from 'react';



const ArtistList = (props) => {
    const artists = props.artists.map((artist,i)=>
        <li key={i} onClick={()=>alert(artist.name)}>{artist.name}</li>
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
