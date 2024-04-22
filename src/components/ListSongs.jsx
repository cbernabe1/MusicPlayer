import React from 'react'
import lists from '../data/music';
import styles from "./ListSongs.module.css";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import getImageUrl from '../fetchImage';

export const ListSongs = (props) => {

    function handleOnClick(index){
        const findSong = lists.find((list,i) => index == i);
        props.play(findSong);
    }

  return (
    <div className={styles.container }>
        <div className={styles.header}><LibraryMusicIcon /> Favorites</div>
        <ul className={styles.listSongs}>
            {
                lists.map((list, index) => {
                    return(
                        <li key={index} className={styles.listItem} onClick={()=>{handleOnClick(index)}}>
                            <div className={styles.circle}> <img src={getImageUrl(list.imgUrl)} alt={list.title} className={styles.img} /> <PlayArrowIcon className={styles.playicon}/>  </div>
                            <div className={styles.details}>
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
