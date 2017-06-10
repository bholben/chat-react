import React, { Component } from 'react';
import badge from '../images/RemedyItem.badge.png';

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
    backgroundImage: `url(${badge})`,
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
