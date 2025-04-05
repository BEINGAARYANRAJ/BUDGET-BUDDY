import React from 'react';


function Header({ title }) {
  return React.createElement('header', null,
    React.createElement('h2', null, title),
    React.createElement('div', { className: 'profile-container' },
      React.createElement('div', { className: 'profile' },
        React.createElement('img', { src: 'image.png', alt: 'Profile' }),
        React.createElement('p', null, 'Admin')
      )
    )
  );
}

export default Header;
