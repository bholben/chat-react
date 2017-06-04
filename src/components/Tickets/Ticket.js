import React from 'react';
import * as moment from 'moment';
import { last, findLast } from 'lodash';
import Avatar from '../common/Avatar';
import VitalTags from './VitalTags';
import VitalDots from './VitalDots';
import * as theme from '../common/styles/theme-variables';

const ticketStyle = {
  display: 'flex',
  height: 55,
  padding: 8,
  borderBottom: '1px solid #bbb',
  color: '#777',
  cursor: 'pointer',
};

function getTicketStyle(ticket) {
  const height = ticket.isActive ? 'initial' : 55;
  const backgroundColor = ticket.isActive ? '#d2ccae' : 'transparent';
  return Object.assign({}, ticketStyle, { height, backgroundColor });
}

function Ticket(props) {
  const { ticket } = props;
  const lastMessage = last(ticket.messages);
  const lastAgentMessage = findLast(ticket.messages, message => message.agent);
  const agent = lastAgentMessage || { uid: '', name: 'Unassigned', email: '' };

  return (
    <div style={getTicketStyle(ticket)}
        onClick={() => props.changeTicket(ticket.key)}>
      <div style={{padding: '5px 10px 5px 20px', marginBottom: -5}}>
        <Avatar user={ticket.user} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{color: theme.colors.brandDark, fontWeight: 700}}>
            {ticket.user.displayName}
          </div>
          <div style={{fontSize: '0.8em'}}>
            {lastMessage ? moment(lastMessage.timestamp).fromNow() : null}
          </div>
        </div>

        {ticket.isActive ?
        <div style={{marginTop: 5}}>
          <VitalTags selected={ticket.vitals} ticketKey={ticket.key} changeVitalsItem={props.changeVitalsItem} />
        </div>
        :
        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 5}}>
          <VitalDots vitals={ticket.vitals} user={agent} />
        </div>
        }
      </div>
    </div>
  );
}

export default Ticket;
