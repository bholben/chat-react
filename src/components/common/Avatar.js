import React from 'react';
import md5 from 'md5';

function Avatar(props) {
  const { user, fallbackTheme, size } = props;
  const hash = md5(user.email);
  const theme = fallbackTheme || 'wavatar';
  let imgUrl = `https://www.gravatar.com/avatar/${hash}?d=${theme}`;

  if (user.displayName === 'Addison') imgUrl = 'https://goo.gl/Fh1gYh';

  return (
    <img src={imgUrl}
        alt={user && user.displayName ? user.displayName : 'Avatar'}
        style={{height: size || 45, borderRadius: '50%'}} />
  );
}

export default Avatar;
