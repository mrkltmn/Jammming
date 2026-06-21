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
    <>
      <h1>Jammmer</h1>
      <div>
        <SearchBar />
        <SearchResults />
      </div>
      <div>
        <Tracklist />
      </div>
      <div>
        <Playlist />
      </div>
    </>
  )
}

export default App
