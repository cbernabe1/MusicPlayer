import React from 'react'
import lists from '../data/music';
import styles from "./ListSongs.module.css";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import getImageUrl from '../fetchImage';

export const ListSongs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}><LibraryMusicIcon /> Favorites</div>
        <ul className={styles.listSongs}>
            {
                lists.map((list, index) => {
                    return(
                        <li key={index} className={styles.listItem}>
                            <div className={styles.circle}><PlayArrowIcon /></div>
                            <div className={styles.details}>
                             <img src={getImageUrl(list.imgUrl)} alt={list.title} className={styles.img} />   
                            <p className={styles.title}>{list.title}</p>
                            <p className={styles.singer}>{list.singer}</p>
                            </div>   
                        </li>
                    );
                })
            }
        </ul>
    </div>
  )
}
