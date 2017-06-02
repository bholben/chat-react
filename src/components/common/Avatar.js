import React from 'react';
import md5 from 'md5';

function Avatar(props) {
  const { user, fallbackTheme, size, isDot } = props;
  const hash = md5(user.email);
  // Gravatar themes: 404, mm, identicon, monsterid, wavatar, retro, blank
  const theme = fallbackTheme || 'wavatar';
  // const theme = fallbackTheme || 'adorable';

  let imgUrl;
  if (theme === 'adorable') {
    imgUrl = `https://api.adorable.io/avatars/80/${user.displayName}@adorable.png`;
  } else {
    imgUrl = `https://www.gravatar.com/avatar/${hash}?d=${theme}`;
  }

  if (user.displayName === 'Addison') imgUrl = 'https://goo.gl/Fh1gYh';
  if (user.displayName === 'bholben') imgUrl = 'https://www.gravatar.com/avatar/6e8ea9ad9340cb53e3bfde6875396650';

  const avatarStyle = {
    height: size || 45,
    borderRadius: '50%',
  };

  if (isDot) avatarStyle.border = '1px solid #1e3f80';

  return <img src={imgUrl} alt={user.displayName} style={avatarStyle} />;
}

export default Avatar;
