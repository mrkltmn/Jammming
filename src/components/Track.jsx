import React from 'react';

function Track({ track }) {
    return (
        <div>
            <img
                src={track.art}
                alt={`album art for ${track.album} by ${track.artist} from Apple iTunes`} />
            <h3>{track.title}</h3>
            <h4>{track.artist}</h4>
            <h4>{track.album}</h4>
        </div>
    )
};

export default Track;