import React from 'react';
import Tag from './Tag';

function VitalTags(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', fontSize: '0.9em'}}>
      <div style={{flex: 1}}>
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 5}}>
          <div style={{marginRight: 10}}>Assignee:</div>
          <Tag user={props.vitals.agent} color={props.vitals.agent.color} />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 5}}>
          <div style={{marginRight: 10}}>Status:</div>
          <Tag text={props.vitals.status.name} color={props.vitals.status.color} />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 5}}>
          <div style={{marginRight: 10}}>Severity:</div>
          <Tag text={props.vitals.severity.name} color={props.vitals.severity.color} />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 5}}>
          <div style={{marginRight: 10}}>Loyalty:</div>
          <Tag text={props.vitals.loyalty.name} color={props.vitals.loyalty.color} />
        </div>
      </div>
    </div>
  );
}

export default VitalTags;
