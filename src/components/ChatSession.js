import React from 'react';
import * as moment from 'moment';
import { last, find } from 'lodash';
import Avatar from './Avatar';

const sessionStyle = {
  display: 'flex',
  padding: 8,
  borderBottom: '1px solid #ddd',
  backgroundColor: 'white',
  color: '#bbb',
  cursor: 'pointer',
};

function getSessionStyle(session) {
  const backgroundColor = session.isActive ? '#eee' : 'white';
  return Object.assign({}, sessionStyle, { backgroundColor });
}

function getMessageText(text) {
  return text.length > 60 ? `${text.substring(0, 60)}...` : text;
}

function ChatSession(props) {
  const { session } = props;
  const lastMessage = last(session.messages);
  const firstUserMessage = find(session.messages, message => !message.isAgent);

  return (
    <div id={session.key}
        style={getSessionStyle(session)}
        onClick={() => props.activateSession(session.key)}>
      <div style={{padding: '5px 10px 5px 20px'}}>
        <Avatar
            style={{margin: 10}}
            user={firstUserMessage}
            fallbackTheme={'wavatar'} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{color: '#444', fontWeight: 700}}>{lastMessage.displayName}</div>
          <div style={{fontSize: '0.8em'}}>
            {moment(lastMessage.timestamp).fromNow()}
          </div>
        </div>
        <div style={{marginTop: 5}}>
          {getMessageText(lastMessage.text)}
        </div>
      </div>
    </div>
  );
}

export default ChatSession;
