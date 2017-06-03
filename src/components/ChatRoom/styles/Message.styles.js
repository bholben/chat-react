import * as theme from '../../common/styles/theme-variables';

export const rightMessage = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
};

export const leftMessage = Object.assign({}, rightMessage, {
  justifyContent: 'flex-start',
});

export const rightColumn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: 10,
};

export const leftColumn = Object.assign({}, rightColumn, {
  alignItems: 'flex-start',
});

export const rightBubble = {
  position: 'relative',
  maxWidth: 220,
  marginTop: 3,
  padding: '10px 15px',
  borderRadius: 20,
  backgroundColor: theme.colors.brandDark,
  color: 'white',
  fontSize: '1.1em',
  fontWeight: 100,
  cursor: 'pointer',
};

export const leftBubble = Object.assign({}, rightBubble, {
  backgroundColor: '#ddd',
  color: theme.colors.brandDark,
  fontWeight: 400,
});

export const x = {
  display: 'none',
  position: 'absolute',
  top: -1,
  right: 7,
  border: 'none',
  backgroundColor: 'transparent',
  color: '#b00',
  fontSize: 24,
};

export function getBubbleStyle(bubbleStyle, message) {
  if (isShortEmojiString(message.text, 6)) {
    return Object.assign({}, bubbleStyle, {
      marginBottom: -8,
      padding: 0,
      backgroundColor: 'none',
      fontSize: 48,
    });
  } else {
    return bubbleStyle;
  }
}

function isShortEmojiString(str, charLimit) {
  const ranges = [
    // https://stackoverflow.com/a/39652525/3465372
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
    ' ', // We are also allowing spaces
  ].join('|');

  const removeEmoji = str => str.replace(new RegExp(ranges, 'g'), '');

  const isOnlyEmojis = str => !removeEmoji(str).length;

  // An emoji commonly contains 2 or more code points so
  // String.prototype.length can be deceptive.  We are
  // multiplying by 2 here to get in the ballpark.
  // A better algorithm is welcome.
  return str && str.length <= charLimit * 2 && isOnlyEmojis(str);
}
