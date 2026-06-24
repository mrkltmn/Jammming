import React from 'react'
import Track from './Track'

function SearchResults({ results }) {
    return (
        <>
            <h2>SearchResults</h2>
            {results.map(track => {
                <Track track={track} />
            })}
        </>
    )

}

export default SearchResults