import React, { Component } from 'react';

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
    this.click = this.click.bind(this);
  }

  mouseDown(e) {
    e.target.style.cursor = '-webkit-grabbing';
    const initialX = this.state.lastX || e.clientX;
    const initialY = this.state.lastY || e.clientY;
    this.setState({ isMouseDown: true, initialX, initialY });
  }

  mouseUp(e) {
    e.target.style.cursor = '-webkit-grab';
    const lastX = e.clientX - this.state.deltaX;
    const lastY = e.clientY - this.state.deltaY;
    this.setState({ isMouseDown: false, lastX, lastY });
  }

  mouseMove(e) {
    if (this.state.isMouseDown) {
      const deltaX = e.clientX - this.state.initialX;
      const deltaY = e.clientY - this.state.initialY;
      this.setState({ deltaX, deltaY });
    }
  }

  click(e) {
    console.log('click');
  }

  render() {
    return (
      <div style={itemStyle}>
        <div style={getDraggableItemStyle(this.state.deltaX, this.state.deltaY)}
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          onClick={this.click}>
          <div>Run</div>
        </div>
      </div>
    );
  }
}

export default RemedyItem;
