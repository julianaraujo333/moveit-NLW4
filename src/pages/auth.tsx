
import styles from '../styles/pages/Auth.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function Auth() {
  return (   
   <div className={styles.AuthContainer}>
     <div>
        <img src="/background-logo.svg" alt="" className={styles.backgroundImage}/>
        
        <main>
          <img src="/logo-full.svg" alt="Move.it"/>
          <h3>Bem-vindo</h3>
          
          <div className={styles.textGroup}>
              <img src="/icons/github.svg" alt="Github"/>
              <p>Faça login com seu Github para começar</p>
          </div>

          <div className={styles.credentials}>
            <input type="text" placeholder="Digite seu username"/>
            <button>
              <AiOutlineArrowRight color="var(--white)" />
            </button>
          </div>
        </main>
      </div>
   </div>
  )
}


