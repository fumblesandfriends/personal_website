import React from 'react';
import LinkedIn from '../../assets/icon/linkedin.svg';
import Github from '../../assets/icon/github.svg';
import Twitter from '../../assets/icon/twitter.svg';

export default class SocialBar extends React.Component {
  render() {
    return (
      <section id="social-bar" className="fluid-container">
        <div className="container">
            <a href="https://www.linkedin.com/pub/jonathan-kolb/27/376/7a5" className="fi-social-linkedin large social-icon">
              <LinkedIn />
            </a>
            <a href="https://twitter.com/kolb0401" className="fi-social-twitter large social-icon">
              <Github />
            </a>
            <a href="https://github.com/fumblesandfriends" className="fi-social-github large social-icon">
              <Twitter />
            </a>
        </div>
      </section>
    );
  }
}
