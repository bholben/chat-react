import React from 'react';
import * as moment from 'moment';

const metaStyle = {
  position: 'absolute',
  top: -20,
  right: 10,
  width: 300,
  textAlign: 'right',
  color: 'gray',
  fontSize: 13
};

const agentMetaStyle = Object.assign({}, metaStyle, {
  left: 10,
  textAlign: 'left'
});

function Meta(props) {
  return props.message.isAgent ? getAgentMeta(props) : getCustomerMeta(props);
}

function getAgentMeta(props) {
  return (
    <div style={agentMetaStyle}>
      <span style={{fontWeight: 700}}>{props.message.name}</span>
      <span> - {moment(props.message.timeStamp).fromNow()}</span>
    </div>
  );
}

function getCustomerMeta(props) {
  return (
    <div style={metaStyle}>
      {moment(props.message.timestamp).fromNow()}
    </div>
  );
}

export default Meta;
