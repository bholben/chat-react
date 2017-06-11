import React from 'react';
import RemedyItem from './RemedyItem';

const cardStyle = {
  padding: 5,
  backgroundColor: '#eee',
  boxShadow: 'gray 5px 5px 8px',
};

function Remedy(props) {
  const { remedy, ticket, activeTicketBounds, setDraggingStatus, saveRemedyItemToTicket, addRemedyItemToInventory } = props;

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3>{remedy.title}</h3>
        <div style={{fontSize: 36, lineHeight: 1.5, cursor: 'pointer'}}
            onClick={() => addRemedyItemToInventory(remedy.key)}>
          +
        </div>
      </div>
      <div style={cardStyle}>
        <div style={{marginBottom: 10}}>{remedy.description}</div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {remedy.availableInventory.map(item => {
            return (
              <RemedyItem
                  key={item.key}
                  remedy={remedy}
                  item={item}
                  saveRemedyItemToTicket={saveRemedyItemToTicket}
                  ticket={ticket}
                  activeTicketBounds={activeTicketBounds}
                  setDraggingStatus={setDraggingStatus}
                  isDraggable={true} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Remedy;
