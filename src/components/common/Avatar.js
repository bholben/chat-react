import React from 'react';
import md5 from 'md5';

function Avatar(props) {
  const { user, fallbackTheme, size, isDot } = props;
  const hash = md5(user.email);
  const theme = fallbackTheme || 'wavatar';
  let imgUrl = `https://www.gravatar.com/avatar/${hash}?d=${theme}`;

  if (user.displayName === 'Addison') imgUrl = 'https://goo.gl/Fh1gYh';

  const avatarStyle = {
    height: size || 45,
    borderRadius: '50%',
  };

  if (isDot) avatarStyle.border = '1px solid #1e3f80';

  return <img src={imgUrl} alt={user.displayName} style={avatarStyle} />;
}

export default Avatar;
