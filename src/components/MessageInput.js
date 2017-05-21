import React from 'react';

function MessageInput(props) {
  const backgroundStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 1,
    backgroundColor: 'white',
  };
  const inputStyle = {
    position: 'fixed',
    bottom: 5,
    left: 20,
    width: 'calc(100% - 60px)',
    zIndex: 2,
    padding: '6px 9px',
    border: '1px solid gray',
    borderRadius: 20,
    fontSize: 16,
  };

  return (
    <form onSubmit={props.sendMessage}>
      <div style={backgroundStyle}></div>
      <input
        type='text'
        placeholder='Message'
        style={inputStyle}
        value={props.message}
        onChange={props.changeMessageState} />
    </form>
  );
}

export default MessageInput;
