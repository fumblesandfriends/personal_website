import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer" className="fluid-container">
        <div className="container">
            <div className="attribution">&#169;{new Date().getFullYear()} Jonathan Kolb</div>
        </div>
      </section>
    );
  }
}
