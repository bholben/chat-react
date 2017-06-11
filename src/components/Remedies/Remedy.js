import React from 'react';
import RemedyItem from './RemedyItem';

const cardStyle = {
  padding: 5,
  backgroundColor: '#eee',
  boxShadow: 'gray 5px 5px 8px',
};

function Remedy(props) {
  const { remedy, ticket, activeTicketBounds, setDraggingStatus, saveRemedyItemToTicket, addRemedyItemToInventory } = props;
  const { key, title, description, inventory, itemTitle, itemImageUrl } = remedy;

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3>{title}</h3>
        <div style={{fontSize: 36, lineHeight: 1.5, cursor: 'pointer'}}
            onClick={() => addRemedyItemToInventory(remedy.key)}>
          +
        </div>
      </div>
      <div style={cardStyle}>
        <div style={{marginBottom: 10}}>{description}</div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {inventory.map(item => {
            return (
              <RemedyItem
                  key={item.key}
                  remedyKey={key}
                  item={item}
                  itemTitle={itemTitle}
                  itemImageUrl={itemImageUrl}
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
