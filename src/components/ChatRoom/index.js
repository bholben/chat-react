import React from 'react';
import Header from './Header';
import Messages from './Messages';
import MessageInput from './MessageInput';
import background from './images/Welcome.background.jpg';

const chatRoomStyle = {
  flex: 10,
  minWidth: 300,
  maxWidth: 500,
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function ChatRoom(props) {
  return (
    <div style={chatRoomStyle}>
      <Header isAgent={props.isAgent} user={props.user} />
      <Messages
          isAgent={props.isAgent}
          user={props.user}
          messages={props.messages}
          deleteMessage={props.deleteMessage} />
      <MessageInput
          messageText={props.messageText}
          changeMessageText={props.changeMessageText}
          sendMessage={props.sendMessage} />
    </div>
  );
}

export default ChatRoom;
