import { every, some } from 'lodash';

export function isShortEmojiString(str, charLimit) {
  // an emoji typically contains 2 or more code points so
  // String.prototype.length can be deceptive
  return str && str.length <= charLimit * 2 && every(str, char => isEmoji(str));
}

export function isEmoji(str) {
  // https://stackoverflow.com/a/39652525/3465372
  const ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
  ];

  return !!str.match(ranges.join('|'));
}

export const isEnter = char => char.charCodeAt(0) === 10;
export const hasEnter = str => some(str, isEnter);
