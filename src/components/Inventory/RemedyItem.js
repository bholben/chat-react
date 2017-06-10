import React, { Component } from 'react';
import * as styles from './styles/RemedyItem.styles';

class RemedyItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseDown: false,
      divX: null,
      divY: null,
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
    this.setState({ isMouseDown: true, divX, divY, mouseX, mouseY });
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
      <div style={styles.item}>
        <div style={styles.getDraggableItem(this.state.divX, this.state.divY)}
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
