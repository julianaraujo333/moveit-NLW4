import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from './../styles/components/Profile.module.css';
export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/22332375?v=4" alt=""/>
            <div>
                <strong>Juliana Araujo</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}