import { useContext, useState, FormEvent, useEffect } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import product1 from '../../assets/product_1.png';
import styles from './styles.module.scss';
import Modal from 'react-modal';

interface IProps {
  tokenQuantity: number; 
  modalIsOpen: boolean; 
  closemodal: () => void;
  addAward: (newAward: string) => void;
}

export function Marketplace({ tokenQuantity, modalIsOpen, closemodal, addAward }: IProps) {
  return (
    <Modal 
    isOpen={modalIsOpen}
    onRequestClose={(newAward) => closemodal()}
    style={{
      content: {
        padding: 0,
        background: '#29292e'
      }
    }}
    >
      <div className={styles.container}>
        <h1>MARKETPLACE</h1>
        <h1>Meus token: {tokenQuantity} NLW</h1>
        <div className="gridContainer">
          <div>
          <div className="item">
              <img src={product1} />
              <p>IGNITE</p>
              <span>(10k NLW)</span>
            </div>
            <button onClick={() => addAward('IGNITE')}>CONVERTER TOKEN</button>
          </div>  

          <div>
          <div>
              <img src={product1} />
              <p>ENCONTRO COM DIEGO</p>
              <span>(5k NLW)</span>
            </div>
            <button onClick={() => addAward('ENCONTRO COM DIEGO')}>CONVERTER TOKEN</button>
          </div>     

          <div>
          <div>
              <img src={product1} />
              <p>1 HORA DE CONSULTORIA</p>
              <span>(1k NLW)</span>
            </div>
            <button onClick={() => addAward('1 HORA DE CONSULTORIA')}>CONVERTER TOKEN</button>
          </div>  
              
          <div>
          <div>
              <img src={product1} />
              <p>CANECA ROCKETSEAT</p>
              <span>(1k NLW)</span>
            </div>
            <button onClick={() => addAward('CANECA ROCKETSEAT')}>CONVERTER TOKEN</button>
          </div>  
      
          <div>
          <div>
              <img src={product1} />
              <p>CAMISA NLW 2021</p>
              <span>(1k NLW)</span>
            </div>
            <button onClick={() => addAward('CAMISA NLW 2021')}>CONVERTER TOKEN</button>
          </div>
          </div>
        </div>        
    </Modal>    
  )
}