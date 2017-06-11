import React, { Component } from 'react';
import * as moment from 'moment';
import { last, findLast, map } from 'lodash';
import Avatar from '../common/Avatar';
import RemedyItem from '../Remedies/RemedyItem';
import VitalTags from './VitalTags';
import VitalDots from './VitalDots';
import * as styles from './styles/Ticket.styles';

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = { isTimeFromNow: true };
    this.clickTime = this.clickTime.bind(this);
    this.clickTicket = this.clickTicket.bind(this);
  }

  clickTime() {
    this.setState({ isTimeFromNow: !this.state.isTimeFromNow });
  }

  clickTicket() {
    this.props.clickTicket(this.props.ticket.key);
    setTimeout(() => {
      // Use a timeout so the expand operation can clear the event loop
      // before we execute (gets us the proper bottom bounds)
      const ticket = this.refs.ticketButton.closest('.ticket');
      const ticketBounds = {
        left: ticket.offsetLeft,
        top: ticket.offsetTop,
        right: ticket.offsetLeft + ticket.offsetWidth,
        bottom: ticket.offsetTop + ticket.offsetHeight,
      };
      const isActive = this.props.activeTicketKey === this.props.ticket.key;
      const activeTicketBounds = isActive ? ticketBounds : null;

      this.props.setActiveTicketBounds(activeTicketBounds);
    });
  }

  getTime(message) {
    const time = moment(message.timestamp);
    return this.state.isTimeFromNow ? time.fromNow() : time.format('llll');
  }

  render() {
    const { ticket, draggingStatus } = this.props;
    const showTarget = ticket.isActive && draggingStatus.isDragging;
    const remedies = map(ticket.remedies, remedy => remedy);
    const lastRemedy = last(remedies);
    const showRemedy = lastRemedy && ticket.isActive;
    const lastMessage = last(ticket.messages);
    const lastAgentMessage = findLast(ticket.messages, message => message.agent);
    const agent = lastAgentMessage || { uid: '', name: 'Unassigned', email: '' };

    return (
      <div style={styles.getTicket(ticket)} className="ticket">
        <div style={styles.avatarColumn}>
          <Avatar user={ticket.user} />
          <div style={styles.getTarget(showTarget)} className="target">
            {showRemedy ?
            <RemedyItem remedy={lastRemedy} />
            : null}
          </div>
        </div>

        <div style={styles.vitalsColumn}>

          <div style={styles.metaRow}>
            <div style={styles.metaLeft}>
              {ticket.user.displayName}
            </div>
            <div style={styles.metaRight}>
              <div style={styles.time} onClick={this.clickTime}>
                {lastMessage ? this.getTime(lastMessage) : null}
              </div>
              <button style={styles.toggleButton}
                  ref="ticketButton"
                  onClick={this.clickTicket}>
                <i className={ticket.isActive ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
              </button>
            </div>
          </div>

          {ticket.isActive ?
          <div style={{marginTop: 5}}>
            <VitalTags
                selected={ticket.vitals}
                ticketKey={ticket.key}
                changeVitalsItem={this.props.changeVitalsItem} />
          </div>
          :
          <div style={styles.vitalDots}>
            <VitalDots
                vitals={ticket.vitals}
                user={agent} />
          </div>
          }

        </div>
      </div>
    );
  }
}

export default Ticket;
