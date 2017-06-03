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
  const { isAgent, user, ticket, messageText } = props;
  const { changeMessageText, sendMessage, deleteMessage } = props;
  return (
    <div style={chatRoomStyle}>
      <Header
          isAgent={isAgent}
          vitals={ticket.vitals}
          user={user} />
      <Messages
          isAgent={isAgent}
          user={user}
          messages={ticket.messages}
          deleteMessage={deleteMessage} />
      <MessageInput
          messageText={messageText}
          changeMessageText={changeMessageText}
          sendMessage={sendMessage} />
    </div>
  );
}

export default ChatRoom;
