import React from 'react';
import { MdApps, MdHome, MdAdd } from 'react-icons/md';
import { FaTrello, FaBell } from 'react-icons/fa';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <div className="box">
        <div className="left">
          <button type="button">
            <MdApps size={20} color="#fff" />
          </button>

          <button type="button">
            <MdHome size={20} color="#fff" />
          </button>

          <button type="button">
            <span className="svg"><FaTrello size={20} color="#fff" /></span> <span className="text">Quadros</span>
          </button>
        </div>
      </div>
      <div className="box">
        <div className="center">
          <h1>
            <span><FaTrello size={18} /> </span> <span>Trello</span>
          </h1>
        </div>
      </div>
      <div className="box">
        <div className="right">
          <button type="button">
            <MdAdd size={20} color="#fff" />
          </button>

          <button type="button">
            <AiOutlineExclamationCircle size={20} color="#fff" />
          </button>

          <button type="button">
            <FaBell size={20} color="#fff" />
          </button>
        </div>
      </div>
    </Container>
  );
}
