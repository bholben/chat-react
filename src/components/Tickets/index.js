import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ticket from './Ticket';
import background from './images/Tickets.background.jpg';

const chatRoomsStyle = {
  flex: 1,
  minWidth: 330,
  maxWidth: 360,
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
};

class Tickets extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.bottomElement);
    node.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const { tickets, clickTicket } = this.props;
    return (
      <div style={chatRoomsStyle}>
        <section style={{padding: 0, overflowY: 'visible'}}>
          {tickets.map(ticket =>
            <Ticket
                key={ticket.lastTimestamp}
                ticket={ticket}
                clickTicket={clickTicket}
                activeTicketKey={this.props.activeTicketKey}
                setActiveTicketBounds={this.props.setActiveTicketBounds}
                draggingStatus={this.props.draggingStatus}
                changeVitalsItem={this.props.changeVitalsItem} />
          )}
          {/* This dummy element is used only to facilitate bottom scrolling */}
          <div ref={el => this.bottomElement = el}></div>
        </section>
      </div>
    );
  }
}

export default Tickets;
