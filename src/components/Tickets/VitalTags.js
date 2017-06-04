import React from 'react';
import md5 from 'md5';
import DropDown from '../common/DropDown';

const vitals = [
  {
    id: 'assignee',
    name: 'Assignee',
    options: [
      { id: '', name: 'Unassigned', color: 'white', email: '' },
      { id: 'NHl2onCI4DTHFfCvN87JuUXxf2C3', name: 'Addison', color: `#${md5('addison@gmail.com').substr(0, 6)}`, email: 'addison@gmail.com' },
      { id: 'kj9z5Yz9y9W9Kw7eR7H4k970uaj1', name: 'Bob', color: `#${md5('bob@gmail.com').substr(0, 6)}`, email: 'bob@gmail.com' },
      { id: 'hgrrPjnAAbXane9WwjGrlIOprJp2', name: 'bholben', color: `#${md5('bholben@gmail.com').substr(0, 6)}`, email: 'bholben@gmail.com' },
    ],
  },
  {
    id: 'status',
    name: 'Status',
    options: [
      { id: 'inQueue', name: 'In Queue', color: 'red' },
      { id: 'inProgress', name: 'In Progress', color: '#ddd' },
      { id: 'underReview', name: 'Under Review', color: 'pink' },
      { id: 'closed', name: 'Closed', color: '#444' },
    ],
  },
  {
    id: 'severity',
    name: 'Severity',
    options: [
      { id: 'critical', name: 'Critical', color: 'red' },
      { id: 'urgent', name: 'Urgent', color: 'orange' },
      { id: 'trivial', name: 'Trivial', color: 'lightblue' },
      { id: 'unknown', name: 'Unknown', color: 'white' },
    ],
  },
  {
    id: 'escalation',
    name: 'Escalation',
    options: [
      { id: 'managerInvolved', name: 'Manager Involved', color: 'red' },
      { id: 'managerAlerted', name: 'Manager Alerted', color: 'orange' },
      { id: 'agent', name: 'Agent', color: 'yellow' },
    ],
  },
  {
    id: 'loyalty',
    name: 'Loyalty',
    options: [
      { id: 'gold', name: 'Gold', color: 'goldenrod' },
      { id: 'silver', name: 'Silver', color: 'silver' },
      { id: 'bronze', name: 'Bronze', color: 'darkgoldenrod' },
      { id: 'base', name: 'Base', color: 'white' },
    ],
  },
];

function VitalTags(props) {
  const { selected, ticketKey, changeVitalsItem } = props;
  return (
    <div style={{fontSize: '0.9em'}}>
      {vitals.map(vital => {
        return (
          <VitalTag
              key={vital.id}
              id={vital.id}
              name={vital.name}
              options={vital.options}
              selected={selected[vital.id]}
              ticketKey={ticketKey}
              changeVitalsItem={changeVitalsItem} />
        );
      })}
    </div>
  );
}

const vitalStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 5,
};

function VitalTag(props) {
  const { id, name, options, selected, ticketKey, changeVitalsItem } = props;
  if (!selected) return null;
  return (
    <div style={vitalStyle}>
      <div style={{marginRight: 10}}>{name}:</div>
      <DropDown
          options={options}
          selected={selected}
          changeItem={selected => changeVitalsItem(id, selected, ticketKey)} />
    </div>
  );
}

export default VitalTags;
