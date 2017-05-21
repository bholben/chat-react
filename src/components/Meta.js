import React from 'react';
import * as moment from 'moment';
import './ChatRoom.css';

export default function (props) {
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

  const nameStyle = {
    fontWeight: 'bold'
  };

  const agentMeta = (
    <div style={agentMetaStyle}>
      <span style={nameStyle}>{`${props.message.name} - `}</span>
      {moment(props.message.dateTime).fromNow()}
    </div>
  );

  const customerMeta = (
    <div style={metaStyle}>
      {moment(props.message.dateTime).fromNow()}
    </div>
  );

  return props.message.isAgent ? agentMeta : customerMeta;
}
