import React from 'react';

function Track({ track }) {
    return (
        <div className='track' >
            <img
                src={track.art}
                alt={`album art for ${track.album} by ${track.artist} from Apple iTunes`} />
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button>+</button>
        </div>
    )
};

export default Track;