import * as theme from '../../common/styles/theme-variables';

export const footer = {
  flex: '0 0 50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const form = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const textArea = {
  width: 'calc(100% - 120px)',
  maxWidth: 400,
  height: 28,
  padding: '2px 15px',
  border: '1px solid #bbb',
  borderRadius: 20,
  fontSize: '1em',
  resize: 'none',
};

export const button = {
  position: 'absolute',
  right: 48,
  top: 3,
  height: 28,
  width: 28,
  border: 'none',
  borderRadius: '50%',
  backgroundColor: '#ddd',
  color: theme.colors.brand1,
};

export const icon = {
  position: 'absolute',
  right: 7,
  top: 2,
  fontSize: 22,
  fontWeight: 700,
};
