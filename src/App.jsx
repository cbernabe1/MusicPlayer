import React from 'react';
import './App.css';
import { Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import {ListSongs} from "./components/ListSongs";
import { Player } from './components/Player';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ListSongs/>}/>
        <Route path="/player" element={<Player/>}/>
      </Routes>
    </>
  )
}

export default App
