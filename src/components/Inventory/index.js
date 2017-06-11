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

function Inventory(props) {
  const { remedies, saveRemedyItem, ticket, activeTicketBounds, setDraggingStatus } = props;
  return (
    <div style={inventoryStyle}>
      {remedies.map(remedy => {
        return (
          <Remedy
              remedy={remedy}
              saveRemedyItem={saveRemedyItem}
              ticket={ticket}
              activeTicketBounds={activeTicketBounds}
              setDraggingStatus={setDraggingStatus} />
        );
      })}
    </div>
  );
}

export default Inventory;
