import React from 'react';
import md5 from 'md5';
import DropDown from './DropDown';

const vitalStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 5,
};

const labelStyle = { marginRight: 10 };

const assigneeOptions = [
  { id: '', name: 'Unassigned', color: 'white', email: '' },
  { id: 'NHl2onCI4DTHFfCvN87JuUXxf2C3', name: 'Addison', color: `#${md5('addison@gmail.com').substr(0, 6)}`, email: 'addison@gmail.com' },
  { id: 'kj9z5Yz9y9W9Kw7eR7H4k970uaj1', name: 'Bob', color: `#${md5('bob@gmail.com').substr(0, 6)}`, email: 'bob@gmail.com' },
  { id: 'hgrrPjnAAbXane9WwjGrlIOprJp2', name: 'bholben', color: `#${md5('bholben@gmail.com').substr(0, 6)}`, email: 'bholben@gmail.com' },
];

const statusOptions = [
  { id: 'inQueue', name: 'In Queue', color: 'red' },
  { id: 'inProgress', name: 'In Progress', color: '#ddd' },
  { id: 'underReview', name: 'Under Review', color: 'pink' },
  { id: 'closed', name: 'Closed', color: '#444' },
];

const severityOptions = [
  { id: 'critical', name: 'Critical', color: 'red' },
  { id: 'urgent', name: 'Urgent', color: 'orange' },
  { id: 'trivial', name: 'Trivial', color: 'lightblue' },
  { id: 'unknown', name: 'Unknown', color: 'white' },
];

const loyaltyOptions = [
  { id: 'gold', name: 'Gold', color: 'goldenrod' },
  { id: 'silver', name: 'Silver', color: 'silver' },
  { id: 'bronze', name: 'Bronze', color: 'darkgoldenrod' },
  { id: 'base', name: 'Base', color: 'white' },
];

function VitalTags(props) {
  const { vitals, ticketKey, changeVitalsItem } = props;
  return (
    <div style={{fontSize: '0.9em'}}>
      <div style={vitalStyle}>
        <div style={labelStyle}>Assignee:</div>
        <DropDown
            options={assigneeOptions}
            selected={vitals.assignee}
            changeItem={selected => changeVitalsItem('assignee', selected, ticketKey)} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Status:</div>
        <DropDown
            options={statusOptions}
            selected={vitals.status}
            changeItem={selected => changeVitalsItem('status', selected, ticketKey)} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Severity:</div>
        <DropDown
            options={severityOptions}
            selected={vitals.severity}
            changeItem={selected => changeVitalsItem('severity', selected, ticketKey)} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Loyalty:</div>
        <DropDown
            options={loyaltyOptions}
            selected={vitals.loyalty}
            changeItem={selected => changeVitalsItem('loyalty', selected, ticketKey)} />
      </div>
    </div>
  );
}

export default VitalTags;
