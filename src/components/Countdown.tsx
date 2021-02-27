import {useContext} from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from './../styles/components/Countdown.module.css';
import {BsFillPlayFill} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import {AiFillCheckCircle} from 'react-icons/ai'

export function Countdown(){
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div> 
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}>
                    Ciclo encerrado
                    <AiFillCheckCircle color="var(--green)" font-size="1.6rem" />
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}>
                            Abandonar ciclo 
                            <GrFormClose font-size="1.6rem" color="inherit"/>
                        </button>
                    )  : (
                        <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}>
                            Iniciar um ciclo 
                            <BsFillPlayFill font-size="1.6rem"/>
                        </button> 
                    )}
                </>
            )}
        </div>
    )
}