import badge from '../images/RemedyItem.badge.png';

const images = { badge };

export const item = {
  position: 'relative',
  height: 60,
  width: 53,
  margin: 3,
};

export function getDraggableItem(divX, divY, imageUrl, isDraggable) {
  const draggableItem = {
    position: 'absolute',
    height: item.height,
    width: item.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${images[imageUrl]})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    color: '#edc13c',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: isDraggable ? '-webkit-grab' : 'default',
  };

  return Object.assign({}, draggableItem, {
    top: divY,
    left: divX,
  });
}
