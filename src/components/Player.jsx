import React,{useEffect, useState} from 'react'
import getImageUrl from '../fetchImage'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import styles from "./Player.module.css";

export const Player = (props) => {
  const [playing, setPlaying] = useState(false);

  useEffect(()=>{
    <audio src=""></audio>
  },[playing])
  return (
    <div className={styles.container}>
      <img src={getImageUrl(props.imgUrl)} alt={props.title} className={styles.image}/>  
      <p className={styles.title}>{props.title}</p>
      <div className={styles.indicator}></div>
      <div className={styles.controls}>
      <SkipPreviousIcon className={styles.skipPrev}/>
      <button onClick={()=>{setPlaying(!playing)}} className={styles.btnplay}>
      {playing ? <PlayCircleOutlineIcon className={styles.play}/> : <PauseCircleOutlineIcon className={styles.play}/>}
      </button>
      <SkipNextIcon className={styles.skipNext}/>
      </div>
    </div>
  )
}
