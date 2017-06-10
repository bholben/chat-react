import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const itemStyle = {
  position: 'relative',
  height: 50,
  width: 70,
  margin: 3,
  borderRadius: '50%',
  backgroundColor: 'lightblue',
};

function getDraggableItemStyle(x, y) {
  const draggableItemStyle = {
    position: 'absolute',
    height: itemStyle.height,
    width: itemStyle.width,
    borderRadius: '50%',
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
      divX: 0,
      divY: 0,
      mouseX: null,
      mouseY: null,
    };

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  mouseDown(e) {
    const parentRect = this.refs.draggable.getBoundingClientRect();
    const divX = parentRect.left;
    const divY = parentRect.top;
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    e.target.style.position = 'fixed';
    e.target.style.cursor = '-webkit-grabbing';
    e.target.style.zIndex = 1;
    this.setState({ isMouseDown: true, divX, divY, mouseX, mouseY});
  }

  mouseUp(e) {
    e.target.style.cursor = '-webkit-grab';
    this.setState({ isMouseDown: false });
  }

  mouseMove(e) {
    if (this.state.isMouseDown) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      const divX = this.state.divX + (mouseX - this.state.mouseX);
      const divY = this.state.divY + (mouseY - this.state.mouseY);
      this.setState({ divX, divY, mouseX, mouseY });
    }
  }

  render() {
    return (
      <div style={itemStyle}>
        <div style={getDraggableItemStyle(this.state.divX, this.state.divY)}
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
