import React from 'react';
import md5 from 'md5';

function Avatar(props) {
  const { user, fallbackTheme } = props;
  const hash = md5(user.email || '');
  const imgUrl = `https://www.gravatar.com/avatar/${hash}?d=${fallbackTheme}`;
  // const imgUrl = 'https://goo.gl/Fh1gYh';

  return (
    <img src={imgUrl}
        alt={user.displayName}
        style={{height: 45,borderRadius: '50%'}} />
  );
}

export default Avatar;
