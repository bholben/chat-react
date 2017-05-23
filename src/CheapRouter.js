import React from 'react';
import ChatRoom from './components/ChatRoom';
// import Auth from './components/Auth';

function CheapRouter(props) {
  if (props.user) {
    return <ChatRoom user={props.user}/>;
  } else {
    // return <Auth />;
  }
}

export default CheapRouter;
