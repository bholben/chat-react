import React from 'react';
import Remedy from './Remedy';
import * as theme from '../common/styles/theme-variables';

const remediesStyle = {
  flex: 1,
  minWidth: 300,
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0 10px 10px',
  overflowY: 'auto',
  color: theme.colors.brand1,
  cursor: 'default',
};

function Remedies(props) {
  const { remedies, addRemedyItemToInventory, saveRemedyItemToTicket, ticket, activeTicketBounds, setDraggingStatus } = props;
  return (
    <div style={remediesStyle}>
      {remedies.map(remedy => {
        return (
          <Remedy
              key={remedy.key}
              remedy={remedy}
              addRemedyItemToInventory={addRemedyItemToInventory}
              saveRemedyItemToTicket={saveRemedyItemToTicket}
              ticket={ticket}
              activeTicketBounds={activeTicketBounds}
              setDraggingStatus={setDraggingStatus} />
        );
      })}
    </div>
  );
}

export default Remedies;
