import React from 'react';
import * as moment from 'moment';
import { last } from 'lodash';
import Avatar from '../common/Avatar';
import Vitals from '../common/Vitals';

const sessionStyle = {
  display: 'flex',
  padding: 8,
  borderBottom: '1px solid #bbb',
  color: '#999',
  cursor: 'pointer',
};

function getSessionStyle(session) {
  const backgroundColor = session.isActive ? '#e6d57d' : 'transparent';
  return Object.assign({}, sessionStyle, { backgroundColor });
}

// function getMessageText(text) {
//   return text.length > 60 ? `${text.substring(0, 60)}...` : text;
// }

function ChatSession(props) {
  const { session } = props;
  const lastMessage = last(session.messages);

  return (
    <div style={getSessionStyle(session)}
        onClick={() => props.changeSession(session.key)}>
      <div style={{padding: '5px 10px 5px 20px'}}>
        <Avatar style={{margin: 10}} user={session.user} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{color: '#1e3f80', fontWeight: 700}}>{session.user.displayName}</div>
          <div style={{fontSize: '0.8em'}}>
            {moment(lastMessage.timestamp).fromNow()}
          </div>
        </div>
        <div style={{marginTop: 5}}>
          <Vitals vitals={session.vitals} />
          {/* {getMessageText(lastMessage.text)} */}
        </div>
      </div>
    </div>
  );
}

export default ChatSession;
