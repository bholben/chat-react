import React from 'react';

const style = {
  position: 'absolute',
  left: -35,
  bottom: 0,
  width: 30,
  borderRadius: '50%',
};

function Avatar(props) {
  // const imgUrl = 'https://www.gravatar.com/avatar/6275a7b2b20dc737f8c728136dc59f62?d=wavatar';
  const imgUrl = 'https://goo.gl/Fh1gYh';
  return props.message.isAgent ? <img src={imgUrl} alt='Avatar' style={style} /> : null;
}

export default Avatar;
