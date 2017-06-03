import React from 'react';
import * as moment from 'moment';
import { last, findLast } from 'lodash';
import Avatar from '../common/Avatar';
import VitalTags from '../common/VitalTags';
import VitalDots from '../common/VitalDots';

const sessionStyle = {
  display: 'flex',
  height: 55,
  padding: 8,
  borderBottom: '1px solid #bbb',
  color: '#777',
  cursor: 'pointer',
};

function getSessionStyle(session) {
  const height = session.isActive ? 171 : 55;
  const backgroundColor = session.isActive ? '#d2ccae' : 'transparent';
  return Object.assign({}, sessionStyle, { height, backgroundColor });
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
      <div style={{padding: '5px 10px 5px 20px', marginBottom: -5}}>
        <Avatar user={session.user} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{color: '#1e3f80', fontWeight: 700}}>
            {session.user.displayName}
          </div>
          <div style={{fontSize: '0.8em'}}>
            {moment(lastMessage.timestamp).fromNow()}
          </div>
        </div>
        {session.isActive ?
          <div style={{marginTop: 5}}>
            <VitalTags vitals={session.vitals} changeVitalsItem={props.changeVitalsItem} />
          </div> :
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
            <div>{getMessageText(lastMessage.text)}</div>
            <VitalDots user={lastAgentMessage.agent} session={session} />
          </div>}
      </div>
    </div>
  );
}

export default ChatSession;
