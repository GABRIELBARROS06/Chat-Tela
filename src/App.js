import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


const users = [
  { id: 1, name: 'nome do usuário' },
  { id: 2, name: 'nome do usuário' },
  { id: 3, name: 'nome do usuário' },
  { id: 4, name: 'nome do usuário' },
  { id: 5, name: 'nome do usuário' },
];

const Chat = () => {
  return (
    <div className="chat-container">
      {/* Sidebar com lista de usuários */}
      <div className="sidebar">
        <div className="search-bar">
        <IoSearch />
          <input type="text" placeholder="Pesquisar por usuários..." />
        </div>

        <div class="contacts-container">
  <div class="contact"><FaUserCircle className='cont'/></div>
  <div class="contact"><FaUserCircle className='cont'/></div>
  <div class="contact"><FaUserCircle className='cont' /></div>
  <div class="contact"><FaUserCircle className='cont'/></div>
</div>

        <div className="user-list">
          {users.map((user) => (
            <div className="user-item" key={user.id}>
              <div className="user-avatar"></div>
              <div className="user-info">
                <span>{user.name}</span>
                <div className="status-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área do Chat */}
      <div className="chat-area">
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="selected-user-avatar"></div>
            <div className="selected-user-name">JAMES SMITH</div>
          </div>
          <div className="chat-header-actions">
            <button><BiSolidPhoneCall /></button>
            <button><CiMenuKebab /></button>
          </div>
        </div>

        <div className="messages">
          <div className="message received">
            <p>Oi, como vai?</p>
          </div>
          <div className="message sent">
            <p>Tudo bem, e você?</p>
          </div>
        </div>

        {/* Input para enviar mensagens */}
        <div className="message-input">
          <input type="text" placeholder="Mensagem..." />
          <button className="send-button"><IoSend />
</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
