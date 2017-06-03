import React from 'react';
import * as moment from 'moment';
import { last, findLast } from 'lodash';
import Avatar from '../common/Avatar';
import VitalTags from '../common/VitalTags';
import VitalDots from '../common/VitalDots';

const ticketStyle = {
  display: 'flex',
  height: 55,
  padding: 8,
  borderBottom: '1px solid #bbb',
  color: '#777',
  cursor: 'pointer',
};

function getTicketStyle(ticket) {
  const height = ticket.isActive ? 171 : 55;
  const backgroundColor = ticket.isActive ? '#d2ccae' : 'transparent';
  return Object.assign({}, ticketStyle, { height, backgroundColor });
}

function getMessageText(text) {
  return text.length > 60 ? `${text.substring(0, 60)}...` : text;
}

function Ticket(props) {
  const { ticket } = props;
  const lastMessage = last(ticket.messages);
  const lastAgentMessage = findLast(ticket.messages, message => message.agent);

  return (
    <div style={getTicketStyle(ticket)}
        onClick={() => props.changeTicket(ticket.key)}>
      <div style={{padding: '5px 10px 5px 20px', marginBottom: -5}}>
        <Avatar user={ticket.user} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{color: '#1e3f80', fontWeight: 700}}>
            {ticket.user.displayName}
          </div>
          <div style={{fontSize: '0.8em'}}>
            {moment(lastMessage.timestamp).fromNow()}
          </div>
        </div>
        {ticket.isActive ?
          <div style={{marginTop: 5}}>
            <VitalTags vitals={ticket.vitals} changeVitalsItem={props.changeVitalsItem} />
          </div> :
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
            <div>{getMessageText(lastMessage.text)}</div>
            <VitalDots vitals={ticket.vitals} user={lastAgentMessage.agent} />
          </div>}
      </div>
    </div>
  );
}

export default Ticket;
