import React,{useState} from 'react';
import './App.css';
import { Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import {ListSongs} from "./components/ListSongs";
import { Player } from './components/Player';
import "./App.css";
import lists from './data/music';

function App() {
  const [song, setSong] = useState({imgUrl: "" ,title: "", singer: ""});

  function handleClickedSong(value){
    const {imgUrl, title, singer} = value;
    setSong({imgUrl: imgUrl, title: title, singer: singer})
  }

  return (
    <div className="container">
      <ListSongs play={handleClickedSong}/>
       {song != null && <Player imgUrl={song.imgUrl} title={song.title} singer={song.singer}/>}
    </div>
  )
}

export default App
