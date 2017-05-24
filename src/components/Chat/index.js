import React from 'react';
import Header from './Header';
import Messages from './Messages';
import MessageInput from './MessageInput';

function Chat (props) {
  return (
    <div>
      <Header />
      <Messages messages={props.messages}
          deleteMessage={props.deleteMessage} />
      <MessageInput
          messageText={props.messageText}
          changeMessageText={props.changeMessageText}
          sendMessage={props.sendMessage} />
    </div>
  );
}

export default Chat;
