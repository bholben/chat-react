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
    const { isDraggable, activeTicketBounds, setDraggingStatus } = this.props;
    if (isDraggable && activeTicketBounds) {
      const parentRect = this.refs.draggable.getBoundingClientRect();
      const divX = parentRect.left;
      const divY = parentRect.top;
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      e.target.style.position = 'fixed';
      e.target.style.cursor = '-webkit-grabbing';
      e.target.style.zIndex = 1;
      this.setState({ isMouseDown: true, divX, divY, mouseX, mouseY });
      setDraggingStatus({ isDragging: true, isInTarget: false });
    }
  }

  mouseUp(e) {
    e.target.style.cursor = '-webkit-grab';
    this.setState({ isMouseDown: false });

    const { isDraggable, ticket, activeTicketBounds, setDraggingStatus, saveRemedyItemToTicket, remedy, item } = this.props;
    if (isDraggable && activeTicketBounds) {
      const target = activeTicketBounds;
      const badgeX = (this.state.divX + (this.state.divX + styles.item.width)) / 2;
      const badgeY = (this.state.divY + (this.state.divY + styles.item.height)) / 2;
      const isInTargetX = target.left < badgeX && badgeX < target.right;
      const isInTargetY = target.top < badgeY && badgeY < target.bottom;
      if (isInTargetX && isInTargetY) {
        setDraggingStatus({ isDragging: false, isInTarget: true });
        saveRemedyItemToTicket(ticket, remedy, item);
      } else {
        setDraggingStatus({ isDragging: false, isInTarget: false });
      }
    }
  }

  mouseMove(e) {
    const { isDraggable, activeTicketBounds } = this.props;
    if (isDraggable && activeTicketBounds && this.state.isMouseDown) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      const divX = this.state.divX + (mouseX - this.state.mouseX);
      const divY = this.state.divY + (mouseY - this.state.mouseY);
      this.setState({ divX, divY, mouseX, mouseY });
    }
  }

  render() {
    const { divX, divY } = this.state;
    const { isDraggable } = this.props;
    const { itemImageUrl, itemTitle } = this.props.remedy;
    return (
      <div style={styles.item}>
        <div style={styles.getDraggableItem(divX, divY, itemImageUrl, isDraggable)}
            ref="draggable"
            onMouseDown={this.mouseDown}
            onMouseUp={this.mouseUp}
            onMouseMove={this.mouseMove}>
          {itemTitle}
        </div>
      </div>
    );
  }
}

export default RemedyItem;
