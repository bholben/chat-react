import React from 'react';
import * as styles from './styles/MessageInput.styles';

function MessageInput(props) {
  const { messageText, changeMessageText, sendMessage, isAgent } = props;
  return (
    <footer style={styles.footer}>
      <form onSubmit={sendMessage} style={styles.form}>
        <textarea
            rows="1"
            maxLength="255"
            placeholder='Message'
            style={styles.textArea}
            value={messageText}
            onChange={changeMessageText}>
        </textarea>

        {isAgent ? null :
        <button style={styles.button}>
          <i className="fa fa-caret-up" style={styles.icon}></i>
        </button>
        }
      </form>
    </footer>
  );
}

export default MessageInput;
