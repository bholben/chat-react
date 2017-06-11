import React from 'react';
import { isEmpty } from 'lodash';
import Header from './Header';
import Messages from './Messages';
import MessageInput from './MessageInput';
import background from './images/Welcome.background.jpg';

const chatRoomStyle = {
  flex: 1,
  minWidth: 300,
  maxWidth: 450,
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'default',
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

      {isAgent && isEmpty(ticket) ?
      null :
      <MessageInput
          isTicket={ticket}
          messageText={messageText}
          changeMessageText={changeMessageText}
          sendMessage={sendMessage} />
      }
    </div>
  );
}

export default ChatRoom;
