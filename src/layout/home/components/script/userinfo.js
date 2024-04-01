import React, { useState, useEffect } from 'react';
import './style/userinfo.css';
import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';

const UserInfo = ({ user }) => {
  return (
    <div className='conenct-user-seccion'>
      <div className="user-info">
        <div className="banner" style={{ backgroundImage: `url(${user.Banner})` }}>
          <div className='content-user-details'>
            <div className="avatar">
              <img src={user.Avatar} alt="Avatar" />
            </div>
            <div className="user-details">
              <h3>{user.UserName}</h3>
              <p>{user.UserName}</p>
              <div className='content-floow'>
                <p className='floow'>Seguidos: {user.Follow}</p>
                <p className='floow'>Seguidores: {user.Followers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content-description'>
        {user.Descipcion}
      </div>
      <div className='conent-data-user'>
        <p>{user.email}</p>
        <p>{user.Phone}</p>
        <p>{user.Genero}</p>
        <p>{user.Birthdate}</p>
      </div>
      <div className='conent-data-user-social'>
        <p><FaGithub /> {user.Github}</p>
        <p><FaInstagram /> {user.Instagram}</p>
        <p><FaTwitter /> {user.Twitter}</p>
        <p><FaFacebook /> {user.Facebook}</p>
        <p><FaDiscord /> {user.Discord}</p>
      </div>
    </div>
  );
};

const UserInfoContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://660598892ca9478ea180b945.mockapi.io/api/v1/user')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setUser(data[0]);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {user && <UserInfo user={user} />}
    </div>
  );
};

export default UserInfoContainer;
