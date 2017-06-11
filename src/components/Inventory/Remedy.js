import React, { Component } from 'react';
import RemedyItem from './RemedyItem';

const cardStyle = {
  padding: 5,
  backgroundColor: '#eee',
  boxShadow: 'gray 5px 5px 8px',
};

class Remedy extends Component {
    render() {
      return (
        <div>
          <h3>Run the Bases</h3>
          <div style={cardStyle}>
            <div style={{marginBottom: 10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
              <RemedyItem
                  remedyItem={{text: 'Run'}}
                  isDraggable={true}
                  ticket={this.props.ticket}
                  activeTicketBounds={this.props.activeTicketBounds}
                  setDraggingStatus={this.props.setDraggingStatus}
                  saveRemedyItem={this.props.saveRemedyItem} />
            </div>
          </div>
        </div>
      );
    }
}

export default Remedy;
