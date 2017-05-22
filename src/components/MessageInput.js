import React from 'react';
import 'font-awesome/css/font-awesome.css'

const backgroundStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: 40,
  zIndex: 1,
  textAlign: 'center',
  backgroundColor: 'white',
};

const inputStyle = {
  width: 'calc(100% - 60px)',
  height: 20,
  marginTop: 3,
  padding: '6px 9px',
  border: '1px solid gray',
  borderRadius: 20,
  fontSize: 16,
};

const buttonStyle = {
  position: 'absolute',
  top: 6,
  right: 24,
  width: 29,
  border: 'none',
  borderRadius: '50%',
  backgroundColor: '#aaa',
  fontSize: 20,
  cursor: 'pointer',
};

function MessageInput(props) {
  return (
    <form onSubmit={props.sendMessage}>
      <div style={backgroundStyle}>
        <input
          type='text'
          placeholder='Message'
          style={inputStyle}
          value={props.message}
          onChange={props.changeMessageState} />
        <button style={buttonStyle}>
          <i className="fa fa-arrow-up"
            style={{color: 'white'}}
            aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
