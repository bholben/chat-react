import React from 'react';
import Avatar from '../common/Avatar';
import Dot from '../common/Dot';

function VitalDots(props) {
  const { vitals, user } = props;
  return (
    <div style={{display: 'flex'}}>
      {/* <Avatar user={user} size={18} isDot={true} /> */}
      <Dot color={vitals.status.color} />
      <Dot color={vitals.severity.color} />
      <Dot color={vitals.loyalty.color} />
    </div>
  );
}

export default VitalDots;
