import React from 'react';
import Header from './Header';
import ChatSessions from './ChatSessions';

const chatRoomsStyle = {
  flex: 5,
  minWidth: 300,
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
};

function ChatRooms(props) {
  const { sessions, changeSession } = props;
  return (
    <div style={chatRoomsStyle}>
      <Header />
      <ChatSessions sessions={sessions}
          changeSession={changeSession}/>
    </div>
  );
}

export default ChatRooms;
