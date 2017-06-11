import * as theme from '../../common/styles/theme-variables';

export function getTicket(ticket) {
  const base = {
    display: 'flex',
    padding: 8,
    borderBottom: '1px solid #bbb',
    color: '#777',
    cursor: 'default',
  };
  const height = ticket.isActive ? 'initial' : 60;
  const backgroundColor = ticket.isActive ? '#d2ccae' : 'transparent';
  return Object.assign({}, base, { height, backgroundColor });
}

export const avatarColumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 5,
};

export function getTarget(showTarget) {
  const base = {
    width: 55,
    height: 60,
    backgroundColor: 'lightgoldenrodyellow',
    border: '3px dashed red',
  };
  return showTarget ? base : {};
}

export const vitalsColumn = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

export const metaRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 5,
  lineHeight: 1.8,
};

export const metaLeft = {
  color: theme.colors.brandDark,
  fontWeight: 700,
};

export const metaRight = {
  display: 'flex',
};

export const time = {
  fontSize: '0.8em',
  cursor: 'pointer',
};

export const toggleButton = {
  marginTop: -5,
  padding: '0 1px 0 20px',
  border: 'none',
  backgroundColor: 'transparent',
  color: theme.colors.brandDark,
  fontSize: 20,
  cursor: 'pointer',
};

export const vitalDots = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 10,
};
