import React from 'react';

const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 8,
};

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const inactiveTextAreaStyle = {
  width: 'calc(100% - 120px)',
  maxWidth: 400,
  minHeight: 28,
  padding: '2px 15px',
  border: '1px solid #bbb',
  borderRadius: 20,
  fontSize: 16,
  resize: 'none',
};

const activeTextAreaStyle = Object.assign({}, inactiveTextAreaStyle, {
  borderColor: '#1e3f80',
});

function MessageInput(props) {
  const { messageText, changeMessageText, sendMessage } = props;
  return (
    <footer style={footerStyle}>
      <form onSubmit={sendMessage} style={formStyle}>
        <textarea
            rows="1"
            maxLength="255"
            placeholder='Message'
            style={messageText ? activeTextAreaStyle : inactiveTextAreaStyle}
            value={messageText}
            onChange={changeMessageText}>
        </textarea>
      </form>
    </footer>
  );
}

export default MessageInput;
