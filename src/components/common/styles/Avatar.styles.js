import md5 from 'md5';
import color from 'color';
import * as theme from './theme-variables';

export function getAvatarStyle(size, isDot) {
  const avatarStyle = {
    height: size || 45,
    width: size || 45,
    borderRadius: '50%',
  }
  if (isDot) avatarStyle.border = `1px solid ${theme.colors.brand1}`;
  return avatarStyle;
};

export function getInitialStyle(user, size) {
  const hash = md5(user.email);
  const backgroundColor = `#${hash.substring(0, 6)}`;

  return Object.assign({}, getAvatarStyle(size), {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: `${(size || 45) / 25}em`,
    backgroundColor,
    color: color(backgroundColor).luminosity() < 0.6 ? 'white' : theme.colors.brandDark,
  });
}

export const avatarOptions = [
  'blank',
  404,
  'mm',
  'identicon',
  'monsterid',
  'wavatar',
  'retro',
  'adorable',
];
