import React from 'react';
import Avatar from './Avatar';
import 'font-awesome/css/font-awesome.css'

function getStyle(backgroundColor) {
  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 18,
    padding: '7px 20px 7px 7px',
    borderRadius: 2,
    backgroundColor,
    color: 'white',
    fontSize: '0.9em',
    fontWeight: 700,
  };
}

const iconStyle = {
  position: 'absolute',
  top: 7,
  right: 5,
  fontSize: '1.5em',
};

function onMouseOver(e) {
  const div = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;
  div.style.fontSize = '0.95em';
}

function onMouseLeave(e) {
  const div = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;
  div.style.fontSize = '0.9em';
}

const itemsStyle = {
  position: 'absolute',
  top: 33,
  left: 5,
  right: 5,
  zIndex: 1,
}

const itemStyle = {
  padding: 8,
  borderBottom: '1px solid #ddd',
  backgroundColor: 'white',
  color: '#777',
}

const checkStyle = {
  margin: '0 5px',
};

function getCheckStyle(selected, id) {
  const isSelected = selected.id === id;
  return isSelected ? checkStyle : Object.assign({}, checkStyle, {color: 'transparent'});
}

function Tag(props) {
  const { options, selected } = props;
  if (selected.displayName) {
    return (
      <div style={getStyle(selected.color)}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave} >
        <Avatar user={selected} size={25} />
        <div style={{marginLeft: 5}}>{selected.displayName}</div>
        <i className="fa fa-caret-down"
            style={iconStyle}
            aria-hidden="true">
        </i>
      </div>
    );
  } else {
    return (
      <div style={{position: 'relative'}}>
        <div style={getStyle(selected.color)}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave} >
          <div>{selected.name}</div>
          <i className="fa fa-caret-down"
              style={iconStyle}
              aria-hidden="true">
          </i>
        </div>
        <div style={itemsStyle}>
          <div style={itemStyle}>
            <i className="fa fa-check" style={getCheckStyle(selected, 'gold')}></i>
            <span>Gold</span>
          </div>
          <div style={itemStyle}>
            <i className="fa fa-check" style={getCheckStyle(selected, 'silver')}></i>
            <span>Silver</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tag;
