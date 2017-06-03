import color from 'color';

export function getDropDownStyle(backgroundColor) {
  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 18,
    padding: '7px 20px 7px 7px',
    borderRadius: 2,
    backgroundColor,
    color: color(backgroundColor).luminosity() < 0.6 ? 'white' : '#333',
    fontWeight: 700,
  };
}

export const icon = {
  position: 'absolute',
  top: 7,
  right: 5,
  fontSize: '1.5em',
};

export function getItemsStyle(isCollapsed) {
  const visibleItems = {
    display: 'block',
    position: 'absolute',
    top: 33,
    left: 5,
    right: 5,
    zIndex: 1,
  };
  const hiddenItems = Object.assign({}, visibleItems, {display: 'none'});
  return isCollapsed ? hiddenItems : visibleItems;
}

export function getItemStyle(isSelected) {
  const item = {
    padding: 8,
    borderBottom: '1px solid #ddd',
    backgroundColor: 'white',
    color: '#777',
  };
  const selectedItem = Object.assign({}, item, {
    color: '#1e3f80',
    fontWeight: 700,
  });
  return isSelected ? selectedItem : item;
}

export function getCheckStyle(isSelected) {
  const check = { margin: '0 5px' };
  const invisibleCheck = Object.assign({}, check, { color: 'transparent' });
  return isSelected ? check : invisibleCheck;
}
