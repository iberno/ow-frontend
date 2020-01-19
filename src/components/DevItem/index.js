import React from 'react'

import './styles.css';

function DevItem({ dev }) {

  return (
    <li key={dev._id} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p className='bio'>{dev.bio}</p>
      <a target="_blank" href={`https://github.com/${dev.github_username}`}>Acessar perfil github</a>
    </li>
  );
}

export default DevItem;