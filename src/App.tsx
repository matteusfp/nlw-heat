import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { Marketplace } from './components/Marketplace';

import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      {/* <Marketplace 
        modalIsOpen={modalVisible}
        closemodal={() => setModalVisible(false)}
        tokenQuantity={Number(20)} 
      /> */}
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </main>
  )
}
