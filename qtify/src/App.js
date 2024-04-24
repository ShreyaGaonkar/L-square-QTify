import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import styles from './App.css'
import { useEffect, useState } from 'react'
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api'
import Section from './components/Section/Section.jsx'

function App() {

  const [topAlbumSongs, setTopAlbumSongs] = useState([])
  const [newAlbumSongs, setNewAlbumSongs] = useState([])
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState(0);

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums()
      setTopAlbumSongs(topAlbumSongs)
    }
    catch (error) {
      console.log(error)
      return null
    }

  }

  const generateNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await fetchNewAlbums()
      setNewAlbumSongs(newAlbumSongs);
     
    }
    catch (error) {
      console.log(error)
      return null
    }
  }


  useEffect(() => {
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    
    generateTopAlbumSongs();
    generateNewAlbumSongs();

  }, [])
  
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumSongs} />
      </div>
    </>
  )
}

export default App