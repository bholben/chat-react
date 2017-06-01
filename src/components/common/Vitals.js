import React from 'react';
import Tag from './Tag';

function Vitals(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9em'}}>
      <div style={{flex: 1}}>
        <div style={{display: 'flex', justifyContent: 'flex-end', margin: 5}}>
          <div style={{display: props.hasLabels ? 'block' : 'none', marginRight: 10}}>Assigned To</div>
          <Tag text={props.vitals.agent.name} color={props.vitals.agent.color} />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', margin: 5}}>
          <div style={{display: props.hasLabels ? 'block' : 'none', marginRight: 10}}>Status</div>
          <Tag text={props.vitals.status.name} color={props.vitals.status.color} />
        </div>
      </div>
      <div style={{flex: 1}}>
        <div style={{display: 'flex', margin: 5}}>
          <Tag text={props.vitals.severity.name} color={props.vitals.severity.color} />
          <div style={{display: props.hasLabels ? 'block' : 'none', marginLeft: 10}}>Severity</div>
        </div>
        <div style={{display: 'flex', margin: 5}}>
          <Tag text={props.vitals.loyalty.name} color={props.vitals.loyalty.color} />
          <div style={{display: props.hasLabels ? 'block' : 'none', marginLeft: 10}}>Loyalty</div>
        </div>
      </div>
    </div>
  );
}

export default Vitals;
