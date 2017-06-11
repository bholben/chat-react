import React from 'react';
import RemedyItem from './RemedyItem';

const cardStyle = {
  padding: 5,
  backgroundColor: '#eee',
  boxShadow: 'gray 5px 5px 8px',
};

function Remedy(props) {
  const { remedy, ticket, activeTicketBounds, setDraggingStatus, saveRemedyItem } = props;
  const { title, description, itemIds, itemTitle, itemImageUrl } = remedy;
  const remedyItem = { itemTitle, itemImageUrl };

  return (
    <div>
      <h3>{title}</h3>
      <div style={cardStyle}>
        <div style={{marginBottom: 10}}>{description}</div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {itemIds.available.map(id => {
            return (
              <RemedyItem
                  remedyItem={remedyItem}
                  isDraggable={true}
                  ticket={ticket}
                  activeTicketBounds={activeTicketBounds}
                  setDraggingStatus={setDraggingStatus}
                  saveRemedyItem={saveRemedyItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Remedy;
