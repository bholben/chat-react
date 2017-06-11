import React from 'react';
import RemedyItem from './RemedyItem';

const cardStyle = {
  padding: 5,
  backgroundColor: '#eee',
  boxShadow: 'gray 5px 5px 8px',
};

function Remedy(props) {
  const { remedy, ticket, activeTicketBounds, setDraggingStatus, saveRemedyItemToTicket, addRemedyItemToInventory } = props;
  const { title, description, itemIds, itemTitle, itemImageUrl } = remedy;
  const remedyItem = { itemTitle, itemImageUrl };

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3>{title}</h3>
        <div style={{fontSize: 36, lineHeight: 1.5, cursor: 'pointer'}}
            onClick={() => addRemedyItemToInventory('-KmN-oiD7DGjjzXDBWHk')}>
          +
        </div>
      </div>
      <div style={cardStyle}>
        <div style={{marginBottom: 10}}>{description}</div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {itemIds.available.map(id => {
            return (
              <RemedyItem
                  key={id}
                  remedyItem={remedyItem}
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
