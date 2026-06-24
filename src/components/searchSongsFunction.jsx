async function searchSongs(searchTerm) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}`;
    const result = await fetch(url);
    const json = await result.json();
    const filteredResults = json.results.filter(item => {
        return (
            item.kind === 'song' || item.kind === 'artist' || item.kind === 'album'
        )
    });

    return filteredResults.slice(0, 25).map(item => ({
        key: item.trackId,
        title: item.trackName,
        artist: item.artistName,
        album: item.collectionName,
        genre: item.primaryGenreName,
        art: item.artworkUrl100
    }));

    //console.log(filteredResults);
}

export default searchSongs;