import React from 'react';

const backgroundStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: 44,
  textAlign: 'center',
  backgroundColor: 'white',
};

const textAreaStyle = {
  width: 'calc(100% - 60px)',
  minHeight: 28,
  marginTop: 3,
  padding: '2px 35px 2px 9px',
  border: '1px solid gray',
  borderRadius: 20,
  fontSize: 16,
  resize: 'none',
};

const inactiveButtonStyle = {
  position: 'absolute',
  top: 6,
  right: 11,
  width: 28,
  height: 28,
  border: 'none',
  borderRadius: '50%',
  backgroundColor: '#ddd',
  color: '#1e3f80',
  fontSize: 20,
  cursor: 'pointer',
};

const activeButtonStyle = Object.assign(
  {},
  inactiveButtonStyle,
  { backgroundColor: '#1e3f80' }
);

function MessageInput(props) {
  return (
    <form onSubmit={props.sendMessage}>
      <div style={backgroundStyle}>
        <textarea
            rows="1"
            maxLength="255"
            placeholder='Message'
            style={textAreaStyle}
            value={props.messageText}
            onChange={props.changeMessageState}>
        </textarea>
        <button style={props.messageText ? activeButtonStyle : inactiveButtonStyle}>
          <i className="fa fa-arrow-up"
              style={props.messageText ? {color: 'white'} : {color: '#1e3f80'}}
              aria-hidden="true">
          </i>
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
