import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Tracklist from './components/Tracklist'
import Playlist from './components/Playlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1 id='mainHeading'>Jammmer</h1>
      <div className='searchBar'>
        <SearchBar />
      </div>
      <div className='songChooser'>
        <div className='searchResults'>
          <SearchResults />
        </div>
        <div className='playlist'>
          <Playlist />
        </div>
      </div>
    </div>
  )
}

export default App
