import React from 'react';
import * as theme from '../common/styles/theme-variables';

const sectionStyle = {
  padding: '50px 30px 30px',
  borderRadius: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
};

const inputStyle = {
  display: 'block',
  width: 180,
  margin: '5px 0 10px',
  padding: '10px 5px',
  border: 'none',
  fontSize: 16,
};

const buttonStyle = {
  float: 'right',
  width: 100,
  padding: 10,
  border: 'none',
  fontSize: 16,
  backgroundColor: theme.colors.brand1,
  color: 'white',
};

function Welcome(props) {
  return (
    <section style={sectionStyle}>
      <h3 style={{margin: 0, textAlign: 'center'}}>Sign in</h3>
      <div style={{margin: '10px 0 70px', textAlign: 'center'}}>(just first name for now)</div>
      <form onSubmit={props.submitSignIn}>
        <label style={{display: 'block'}} htmlFor="displayName">First Name</label>
        <input style={inputStyle} id="displayName" placeholder="Enter name here" autoFocus />
        <button style={buttonStyle} type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Welcome;
