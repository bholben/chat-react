import React, { Component } from 'react';
import md5 from 'md5';
import color from 'color';
import axios from 'axios';
import * as theme from './styles/theme-variables';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidImage: false };
  }

  componentWillMount() {
    const { user, fallbackTheme, size, isDot } = this.props;
    const hash = md5(user.email);
    // Gravatar themes: 404, mm, identicon, monsterid, wavatar, retro, blank
    const avatarTheme = fallbackTheme || 'wavatar';
    // const avatarTheme = fallbackTheme || 'adorable';

    if (avatarTheme === 'adorable') {
      this.imgUrl = `https://api.adorable.io/avatars/80/${user.displayName}@adorable.png`;
    } else {
      // this.imgUrl = `https://www.gravatar.com/avatar/${hash}?d=${avatarTheme}`;
      // this.imgUrl = `https://www.gravatar.com/avatar/${hash}?d=404`;
      this.imgUrl = `https://www.gravatar.com/avatar/${hash}`;
    }

    // if (user.displayName === 'Addison') this.imgUrl = 'https://goo.gl/Fh1gYh';
    if (user.displayName === 'Addison') this.imgUrl = 'http://www.txstate.edu/cache562dd3409c58daf30a25b4ff19a664e0/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:32b72130-ec02-4f98-8890-1d175fc27f64/Frye%252CJessica.jpg?mode=fit&width=256';

    this.avatarStyle = {
      height: size || 45,
      width: size || 45,
      borderRadius: '50%',
    };

    if (isDot) this.avatarStyle.border = `1px solid ${theme.colors.brand1}`;

    const backgroundColor = `#${hash.substring(0, 6)}`;

    this.initialStyle = Object.assign({}, this.avatarStyle, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: `${(size || 45) / 25}em`,
      backgroundColor,
      color: color(backgroundColor).luminosity() < 0.6 ? 'white' : theme.colors.brandDark,
    });

    if (user.displayName === 'Addison') {
      this.setState({ isValidImage: true });
    } else {
      axios.get(this.imgUrl)
        .then(res => {
          const hasNoImage = res.data.endsWith("���Q]')��");
          if (hasNoImage) return Promise.reject('no image');
          this.setState({ isValidImage: true });
        })
        .catch(() => this.setState({ isValidImage: false }));
    }
  }

  render() {
    return (
      this.state.isValidImage ?
      <img src={this.imgUrl} alt={this.props.user.displayName} style={this.avatarStyle} /> :
      <div style={this.initialStyle}>
        {this.props.user.displayName.toUpperCase().substring(0, 1)}
      </div>
    );
  }
}

export default Avatar;
