import React from 'react';
import { isEmpty } from 'lodash';
import Messages from './Messages';
import MessageInput from './MessageInput';
import backdrop from '../common/images/backdrop.faded.jpg';

function getChatRoomStyle(isAgent) {
  return {
    flex: 1,
    minWidth: 300,
    maxWidth: isAgent ? 450 : '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${backdrop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'default',
  };
}

function ChatRoom(props) {
  const { isAgent, user, ticket, messageText, changeMessageText, sendMessage,
    deleteMessage } = props;
  return (
    <div style={getChatRoomStyle(isAgent)}>
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
          sendMessage={sendMessage}
          isAgent={isAgent} />
      }
    </div>
  );
}

export default ChatRoom;
