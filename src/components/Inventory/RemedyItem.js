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
    cursor: 'grab',
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
    };

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.click = this.click.bind(this);
  }

  mouseDown(e) {
    const initialX = e.clientX;
    const initialY = e.clientY;
    this.setState({ isMouseDown: true, initialX, initialY });
  }

  mouseUp(e) {
    console.log('mouseUp');
    this.setState({ isMouseDown: false });
  }

  mouseMove(e) {
    if (this.state.isMouseDown) {
      const deltaX = e.clientX - this.state.initialX;
      const deltaY = e.clientY - this.state.initialY;
      this.setState({ deltaX, deltaY });

      console.log(deltaX, deltaY);
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
