import React from 'react';

const backgroundStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: 44,
  textAlign: 'right',
  backgroundColor: 'white',
};

const inactiveTextAreaStyle = {
  width: 220,
  minHeight: 28,
  marginTop: 3,
  padding: '2px 65px 2px 15px',
  border: '1px solid #bbb',
  borderRight: 'none',
  borderRadius: 0,
  borderBottomLeftRadius: 20,
  borderTopLeftRadius: 20,
  fontSize: 16,
  resize: 'none',
};

const activeTextAreaStyle = Object.assign(
  {},
  inactiveTextAreaStyle,
  { borderColor: '#1e3f80' }
);

const inactiveButtonStyle = {
  position: 'absolute',
  top: 4,
  right: 0,
  width: 60,
  height: 32,
  border: 'none',
  textAlign: 'center',
  backgroundColor: '#bbb',
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
            style={props.messageText ? activeTextAreaStyle : inactiveTextAreaStyle}
            value={props.messageText}
            onChange={props.changeMessageState}>
        </textarea>
        <button style={props.messageText ? activeButtonStyle : inactiveButtonStyle}>
          <i className="fa fa-arrow-up"
              style={{color: 'white'}}
              aria-hidden="true">
          </i>
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
