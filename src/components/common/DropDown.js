import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside'
import Avatar from './Avatar';
import * as styles from './styles/DropDown.styles';
import 'font-awesome/css/font-awesome.css'

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: true };
    this.changeFontSize = this.changeFontSize.bind(this);
    this.onClickDropDown = this.onClickDropDown.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
  }

  changeFontSize(e, fontSize) {
    const { className, parentNode } = e.target;
    const dropDown = className === 'dropdown' ? e.target : parentNode;
    const text = [...dropDown.children].find(child => child.tagName === 'DIV');
    text.style.fontSize = fontSize;
  }

  onClickDropDown(e) {
    this.clickedDropDown = e.target;
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  onClickItem(e) {
    const { className, parentNode } = e.target;
    const dropDown = className === 'dropdown' ? e.target : parentNode;
    const { options, changeItem } = this.props;
    const selected = options.find(option => option.id === dropDown.dataset.id);
    changeItem(selected)
      .then(() => this.setState({ isCollapsed: true }))
      .catch(console.error);
  }

  handleClickOutside(e) {
    this.setState({ isCollapsed: true });
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
            className="dropdown"
            onMouseOver={e => this.changeFontSize(e, '0.95em')}
            onMouseLeave={e => this.changeFontSize(e, '0.9em')}
            onClick={this.onClickDropDown} >
          {isUser ? <Avatar user={selected} size={25} /> : null}
          <div style={{marginLeft: isUser ? 5 : 0, fontSize: '0.9em'}}>
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

export default onClickOutside(DropDown);
