import React from 'react';
import Remedy from './Remedy';
import * as theme from '../common/styles/theme-variables';

const inventoryStyle = {
  flex: 1,
  minWidth: 200,
  padding: '0 10px 10px',
  overflowY: 'auto',
  color: theme.colors.brand1,
};

function Remedies(props) {
  const { remedies, addRemedyItemToInventory, saveRemedyItemToTicket, ticket, activeTicketBounds, setDraggingStatus } = props;
  return (
    <div style={inventoryStyle}>
      {remedies.map(remedy => {
        return (
          <Remedy
              key={remedy.id}
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
