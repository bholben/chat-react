import React from 'react';
import { isEmpty } from 'lodash';
import RemedyItem from './RemedyItem';

const cardStyle = {
  padding: 5,
  backgroundColor: '#eee',
  boxShadow: 'gray 5px 5px 8px',
};

const emptyStyle = {
  background: '#edc13c',
  padding: 5,
  width: '100%',
  textAlign: 'center',
  fontWeight: 700,
};

function Remedy(props) {
  const { remedy, ticket, activeTicketBounds, setDraggingStatus, saveRemedyItemToTicket, addRemedyItemToInventory } = props;

  return (
    <div style={{flex: '1 1 200px', maxWidth: '100%', margin: '10px 20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontSize: '1.2em', marginBottom: 5}}>{remedy.title}</div>
        <div style={{fontSize: '2.5em', marginTop: -15, cursor: 'pointer'}}
            onClick={() => addRemedyItemToInventory(remedy.key)}>
          +
        </div>
      </div>
      <div style={cardStyle}>
        <div style={{marginBottom: 10, fontSize: '0.8em'}}>
          {remedy.description}
        </div>
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
          {isEmpty(remedy.availableInventory) ?
          <div style={emptyStyle}>Inventory is Empty</div>
          : null}
        </div>
      </div>
    </div>
  );
}

export default Remedy;
