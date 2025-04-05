import React from 'react';

function Card({ icon, title, value, description }) {
  return React.createElement('div', { className: 'card' },
    React.createElement('i', { className: 'material-icons' }, icon),
    React.createElement('div', null,
      React.createElement('h3', null, title),
      React.createElement('p', null, value),
      React.createElement('span', null, description)
    )
  );
}

export default Card;
