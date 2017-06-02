import React from 'react';
import Avatar from '../common/Avatar';
import Dot from '../common/Dot';

function VitalDots(props) {
  const { user, session } = props;
  return (
    <div style={{display: 'flex'}}>
      <Avatar user={user} size={18} isDot={true} />
      <Dot color={session.vitals.status.color} />
      <Dot color={session.vitals.severity.color} />
      <Dot color={session.vitals.loyalty.color} />
    </div>
  );
}

export default VitalDots;
