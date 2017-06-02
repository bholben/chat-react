import React from 'react';
import Tag from './Tag';

const vitalStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 5,
};

const labelStyle = { marginRight: 10 };

const assigneeOptions = [
  { uid: 'NHl2onCI4DTHFfCvN87JuUXxf2C3', displayName: 'Addison' },
  { uid: 'kj9z5Yz9y9W9Kw7eR7H4k970uaj1', displayName: 'Bob' },
  { uid: 'hgrrPjnAAbXane9WwjGrlIOprJp2', displayName: 'bholben' },
];

const statusOptions = [
  { id: 'inQueue', name: 'In Queue' },
  { id: 'inProgress', name: 'In Progress' },
  { id: 'closed', name: 'Closed' },
];

const severityOptions = [
  { id: 'trivial', name: 'Trivial' },
  { id: 'critical', name: 'Critical' },
];

const loyaltyOptions = [
  { id: 'gold', name: 'Gold' },
  { id: 'silver', name: 'Silver' },
  { id: 'bronze', name: 'Bronze' },
];

function VitalTags(props) {
  return (
    <div style={{fontSize: '0.9em'}}>
      <div style={vitalStyle}>
        <div style={labelStyle}>Assignee:</div>
        <Tag options={assigneeOptions} selected={props.vitals.agent} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Status:</div>
        <Tag options={statusOptions} selected={props.vitals.status} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Severity:</div>
        <Tag options={severityOptions} selected={props.vitals.severity} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Loyalty:</div>
        <Tag options={loyaltyOptions} selected={props.vitals.loyalty} />
      </div>
    </div>
  );
}

export default VitalTags;
