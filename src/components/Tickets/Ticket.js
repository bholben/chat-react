import React, { Component } from 'react';
import * as moment from 'moment';
import { last, findLast } from 'lodash';
import Avatar from '../common/Avatar';
import VitalTags from './VitalTags';
import VitalDots from './VitalDots';
import * as styles from './styles/Ticket.styles';

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = { isTimeFromNow: true };
    this.clickTime = this.clickTime.bind(this);
  }

  clickTime() {
    this.setState({ isTimeFromNow: !this.state.isTimeFromNow });
  }

  getTime(message) {
    const time = moment(message.timestamp);
    return this.state.isTimeFromNow ? time.fromNow() : time.format('llll');
  }

  render() {
    const { ticket } = this.props;
    const lastMessage = last(ticket.messages);
    const lastAgentMessage = findLast(ticket.messages, message => message.agent);
    const agent = lastAgentMessage || { uid: '', name: 'Unassigned', email: '' };

    return (
      <div style={styles.getTicket(ticket)}>
        <div style={styles.avatarColumn}>
          <Avatar user={ticket.user} />
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
                  onClick={() => this.props.clickTicket(ticket.key)}>
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
