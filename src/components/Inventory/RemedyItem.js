import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const itemStyle = {
  position: 'relative',
  height: 50,
  width: 70,
  margin: 3,
  backgroundColor: 'lightblue',
};

function getDraggableItemStyle(x, y) {
  const draggableItemStyle = {
    position: 'absolute',
    height: 50,
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    boxShadow: 'gray 1px 1px 5px',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: '-webkit-grab',
  };

  return Object.assign({}, draggableItemStyle, {
    top: y,
    left: x,
  });
}

class RemedyItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseDown: false,
      initialX: null,
      initialY: null,
      deltaX: 0,
      deltaY: 0,
      lastX: null,
      lastY: null,
    };

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  mouseDown(e) {
    const parentRect = this.refs.draggable.getBoundingClientRect();
    const deltaX = parentRect.left;
    const deltaY = parentRect.top;
    const initialX = this.state.lastX || deltaX;
    const initialY = this.state.lastY || deltaY;
    // const initialX = this.state.lastX || e.pageX;
    // const initialY = this.state.lastY || e.pageY;

    const mouseX = e.pageX - e.target.offsetLeft;
    const mouseY = e.pageY - e.target.offsetTop;

    console.log(parentRect, deltaX, deltaY, mouseX, mouseY);
    console.dir(e.target);
    e.target.style.position = 'fixed';
    e.target.style.cursor = '-webkit-grabbing';
    this.setState({ isMouseDown: true, initialX, initialY, deltaX, deltaY });
  }

  mouseUp(e) {
    e.target.style.cursor = '-webkit-grab';
    const lastX = e.pageX - this.state.deltaX;
    const lastY = e.pageY - this.state.deltaY;
    this.setState({ isMouseDown: false, lastX, lastY });
  }

  mouseMove(e) {
    e.target.style.zIndex = 99999;
    if (this.state.isMouseDown) {
      console.log(e.pageX, e.pageY);
      const deltaX = e.pageX - this.state.initialX;
      const deltaY = e.pageY - this.state.initialY;
      this.setState({ deltaX, deltaY });
    }
  }

  render() {
    return (
      <div style={itemStyle}>
        <div style={getDraggableItemStyle(this.state.deltaX, this.state.deltaY)}
            ref="draggable"
            onMouseDown={this.mouseDown}
            onMouseUp={this.mouseUp}
            onMouseMove={this.mouseMove}>
          Run
        </div>
      </div>
    );
  }
}

export default RemedyItem;
