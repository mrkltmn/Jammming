import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import searchSongs from './components/searchSongsFunction'

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const results = await searchSongs(search);
    setResults(results);
  };

  return (
    <div className='app'>
      <h1 id='mainHeading'>Jammmer</h1>
      <div className='searchBar'>
        <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
      </div>
      <div className='songChooser'>
        <div className='searchResults'>
          <SearchResults results={results} />
        </div>
        <div className='playlist'>
          <Playlist />
        </div>
      </div>
    </div>
  )
}

export default App
