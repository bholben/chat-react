import React from 'react';
import { isEmpty } from 'lodash';
import Messages from './Messages';
import MessageInput from './MessageInput';
import backdrop from '../common/images/backdrop.faded.jpg';

const chatRoomStyle = {
  flex: 1,
  minWidth: 300,
  maxWidth: 450,
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${backdrop})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'default',
};

function ChatRoom(props) {
  const { isAgent, user, ticket, messageText } = props;
  const { changeMessageText, sendMessage, deleteMessage } = props;
  return (
    <div style={chatRoomStyle}>
      <Messages
          isAgent={isAgent}
          user={user}
          messages={ticket.messages}
          deleteMessage={deleteMessage} />

      {isAgent && isEmpty(ticket) ? null :
      <MessageInput
          isTicket={!!ticket}
          messageText={messageText}
          changeMessageText={changeMessageText}
          sendMessage={sendMessage} />
      }
    </div>
  );
}

export default ChatRoom;
