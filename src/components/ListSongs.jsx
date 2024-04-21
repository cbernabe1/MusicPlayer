import React,{useState} from 'react'
import lists from '../data/music';
import styles from "./ListSongs.module.css";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import getImageUrl from '../fetchImage';
import { Link } from 'react-router-dom';

export const ListSongs = () => {


  return (
    <div className={styles.container }>
        <div className={styles.header}><LibraryMusicIcon /> Favorites</div>
        <ul className={styles.listSongs}>
            {
                lists.map((list, index) => {
                    return(
                        <Link to="/player">
                        <li key={index} className={styles.listItem}>
                            <div className={styles.circle}> <img src={getImageUrl(list.imgUrl)} alt={list.title} className={styles.img} /> <PlayArrowIcon className={styles.playicon}/>  </div>
                            <div className={styles.details}>
                            <p className={styles.title}>{list.title}</p>
                            <p className={styles.singer}>{list.singer}</p>
                            </div>   
                        </li>
                        </Link>
                    );
                })
            }
        </ul>
    </div>
  )
}
