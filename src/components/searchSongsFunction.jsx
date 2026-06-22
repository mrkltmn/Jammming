async function searchSongs(searchTerm) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}`;
    const result = await fetch(url);
    const json = await result.json();
    const filteredResults = json.results.filter(item => {
        return (
            item.kind === 'song' || item.kind === 'artist' || item.kind === 'album'
        )
    });


    console.log(filteredResults);
}

export default searchSongs;