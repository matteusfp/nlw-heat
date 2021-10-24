import { useContext, useState, FormEvent, useEffect } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import { Marketplace } from '../Marketplace';
import styles from './styles.module.scss';

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('');
  const [tokenQuantity, setTokenQuantity] = useState('0.00');
  const [modalVisible, setModalVisible] = useState(false);
  const [awards, setAwards] = useState([]);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    await api.post('messages', { message })

    setMessage('');
  }

  useEffect(() => {
    setInterval(() => {
      setTokenQuantity(old => (Number(old) + Math.random() * 3).toFixed(2))
    }, 3000)
  }, [])

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size="32" />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
        <p className={styles.tokenContainer}>{tokenQuantity} NLW</p>
        <p className={styles.tokenAlert}>* ganhe token NLW participando desse feed</p>
        <div className={styles.marketplaceContainer}>
          <button onClick={() => setModalVisible(true)}>MARKETPLACE</button>
        </div>
        <div style={{marginTop: 16}}>
          {awards.map(award => (<p>{award}</p>))}
        </div>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>

        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={event => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </form>  
      <Marketplace 
        modalIsOpen={modalVisible}
        closemodal={() => {setModalVisible(false)}}
        addAward={(newAward) => {setAwards(old => ([...old, newAward])); setModalVisible(false)}}
        tokenQuantity={Number(tokenQuantity)} 
      />
    </div>
  )
}