import React from "react";

export default class Bio extends React.Component {

  render() {
    return (
      <section id="intro" className="fluid-container">
        <div className="text-mask"></div>
        <div className="container">
          <h1 className="title">Hi I'm Jonathan</h1>
          <p className="content animated fadeIn-down">
            Software Engineer, Hockey Enthusiast, Talentless Writer.
          </p>
        </div>

      </section>
    );
  }
}
