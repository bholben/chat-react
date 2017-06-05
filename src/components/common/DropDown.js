import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside'
import color from 'color';
import Avatar from './Avatar';
import * as styles from './styles/DropDown.styles';
import * as theme from './styles/theme-variables';
import 'font-awesome/css/font-awesome.css'

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: true };
    this.hoverDropDown = this.hoverDropDown.bind(this);
    this.clickDropDown = this.clickDropDown.bind(this);
    this.clickItem = this.clickItem.bind(this);
  }

  hoverDropDown(e, bgColor) {
    const contrast = color(bgColor).luminosity() < 0.6 ? 'white': theme.colors.brandDark;
    const { className, parentNode } = e.target;
    const dropDown = className === 'dropdown' ? e.target : parentNode;
    dropDown.style.backgroundColor = bgColor ? bgColor : theme.colors.brandDark;
    dropDown.style.color = bgColor ? contrast : '#ddd';
  }

  clickDropDown(e) {
    this.clickedDropDown = e.target;
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  clickItem(e) {
    const { className, parentNode } = e.target;
    const option = className === 'option' ? e.target : parentNode;
    const { options, changeItem } = this.props;
    const selected = options.find(opt => opt.id === option.dataset.id);
    changeItem(selected)
      .then(() => this.setState({ isCollapsed: true }))
      .catch(console.error);
  }

  handleClickOutside() {
    // This magical method is part of the onClickOutside HOC
    this.setState({ isCollapsed: true });
  }

  render() {
    const { options, selected } = this.props;
    if (!selected) return null;
    const isUser = selected.email;

    if (isUser) {
      selected.uid = selected.id;
      selected.displayName = selected.name;
    }

    return (
      <div style={{position: 'relative'}}>
        <div style={styles.getDropDownStyle(selected.color)}
            className="dropdown"
            onMouseOver={e => this.hoverDropDown(e, null)}
            onMouseLeave={e => this.hoverDropDown(e, selected.color)}
            onClick={this.clickDropDown} >

          {isUser ?
          <Avatar user={selected} size={25} hasBorder={true} />
          : null}

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
                  className="option"
                  data-id={option.id}
                  onClick={this.clickItem}>
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
