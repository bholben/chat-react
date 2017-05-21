import React from 'react';
import Meta from './Meta';
import Avatar from './Avatar';

function Messages(props) {
  const ulStyle = {
    margin: '90px 0 60px',
    padding: 0,
    overflowY: 'scroll',
  }

  const customerStyle = {
    position: 'relative',
    float: 'right',
    clear: 'both',
    maxWidth: 220,
    margin: '20px 15px 10px',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#1e3f80',
    listStyle: 'none',
    color: 'white',
    fontWeight: 100,
  };

  const agentStyle = Object.assign({}, customerStyle, {
    float: 'left',
    marginLeft: 45,
    backgroundColor: 'lightgrey',
    color: '#1e3f80',
    fontWeight: 400,
  });

  return (
    <ul style={ulStyle}>
      {props.messages.map(message =>
        <li key={message.id} style={message.isAgent ? agentStyle : customerStyle}>
          <Meta message={message}/>
          <Avatar message={message} />
          <div>{message.text}</div>
        </li>
      )}
    </ul>
  );
}

export default Messages;
