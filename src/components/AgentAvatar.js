import React from 'react';

function AgentAvatar(props) {
  const imgUrl = 'http://www.txstate.edu/cache562dd3409c58daf30a25b4ff19a664e0/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:32b72130-ec02-4f98-8890-1d175fc27f64/Frye%252CJessica.jpg?mode=fit&width=256';
  return props.isAgent ? <img src={imgUrl} /> : null;
}

export default AgentAvatar;
