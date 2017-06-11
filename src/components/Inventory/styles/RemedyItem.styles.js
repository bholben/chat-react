import badge from '../images/RemedyItem.badge.png';

const images = { badge };

export const item = {
  position: 'relative',
  height: 60,
  width: 53,
  margin: 3,
};

export function getDraggableItem(x, y) {
  const draggableItem = {
    position: 'absolute',
    height: item.height,
    width: item.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${images['badge']})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    color: '#edc13c',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: '-webkit-grab',
  };

  return Object.assign({}, draggableItem, {
    top: y,
    left: x,
  });
}
