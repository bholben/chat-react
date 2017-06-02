import React from 'react';
import * as moment from 'moment';
import { last, findLast } from 'lodash';
import Avatar from '../common/Avatar';
import Dot from '../common/Dot';
import Vitals from '../common/Vitals';

const sessionStyle = {
  display: 'flex',
  padding: 8,
  borderBottom: '1px solid #bbb',
  color: '#777',
  cursor: 'pointer',
};

function getSessionStyle(session) {
  const backgroundColor = session.isActive ? '#d2ccae' : 'transparent';
  return Object.assign({}, sessionStyle, { backgroundColor });
}

function getMessageText(text) {
  return text.length > 60 ? `${text.substring(0, 60)}...` : text;
}

function ChatSession(props) {
  const { session } = props;
  const lastMessage = last(session.messages);
  const lastAgentMessage = findLast(session.messages, message => message.agent);

  return (
    <div style={getSessionStyle(session)}
        onClick={() => props.changeSession(session.key)}>
      <div style={{padding: '5px 10px 5px 20px'}}>
        <Avatar user={session.user} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div>
          <div style={{float: 'left', color: '#1e3f80', fontWeight: 700}}>
            {session.user.displayName}
          </div>
          <div style={{float: 'right'}}>
            {!session.isActive ? <div style={{float: 'left', display: 'flex'}}>
              <Avatar user={lastAgentMessage.agent} size={18} isDot={true} />
              <Dot color={session.vitals.status.color} />
              <Dot color={session.vitals.severity.color} />
              <Dot color={session.vitals.loyalty.color} />
            </div> : null}
            <div style={{float: 'right', width: 120, fontSize: '0.8em', textAlign: 'right'}}>
              {moment(lastMessage.timestamp).fromNow()}
            </div>
          </div>
        </div>
        {session.isActive ? <div style={{marginTop: 5}}>
          <Vitals vitals={session.vitals} />
        </div> : getMessageText(lastMessage.text)}
      </div>
    </div>
  );
}

export default ChatSession;
