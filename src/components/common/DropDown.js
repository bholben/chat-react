import React, { Component } from 'react';
import Avatar from './Avatar';
import * as styles from './styles/DropDown.styles';
import 'font-awesome/css/font-awesome.css'

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: true,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClickDropDown = this.onClickDropDown.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
  }

  onMouseOver(e) {
    const div = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;
    div.style.fontSize = '0.95em';
  }

  onMouseLeave(e) {
    const div = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;
    div.style.fontSize = '0.9em';
  }

  onClickDropDown() {
    this.setState({isCollapsed: !this.state.isCollapsed});
  }

  onClickItem(e) {
    const { options, changeItem } = this.props;
    const div = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;
    const selected = options.find(option => option.id === div.dataset.id);
    changeItem(selected)
      .then(() => this.setState({isCollapsed: true}))
      .catch(console.error);
  }

  render() {
    const { options, selected } = this.props;
    const isUser = selected.email;

    if (isUser) {
      selected.uid = selected.id;
      selected.displayName = selected.name;
    }

    return (
      <div style={{position: 'relative'}}>
        <div style={styles.getDropDownStyle(selected.color)}
            onMouseOver={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}
            onClick={this.onClickDropDown} >
          {isUser ? <Avatar user={selected} size={25} /> : null}
          <div style={{marginLeft: isUser ? 5 : 0}}>
            {selected.name}
          </div>
          <i className="fa fa-caret-down"
              style={styles.icon}
              aria-hidden="true">
          </i>
        </div>
        <div style={styles.getItemsStyle(this.state.isCollapsed)}>
          {options.map(option => {
            const isSelected = selected.id === option.id;
            return (
              <div key={option.id}
                  style={styles.getItemStyle(isSelected)}
                  data-id={option.id}
                  onClick={this.onClickItem}>
                <i className="fa fa-check" style={styles.getCheckStyle(isSelected)}></i>
                <span>{option.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DropDown;
