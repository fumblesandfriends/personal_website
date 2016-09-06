import React from "react";

export default class Bio extends React.Component {

  render() {
    return (
      <section id="bio" className="fluid-container">
        <div className="container">
            <h2>About Me</h2>
            <p>
              I am a full stack software engineer for Smarter Travel, a subsidiary of
              TripAdvisor. In my free time I am the volunteer IT Manager
              of <a href="http://rufftalesrescue.org">Ruff Tales Rescue</a>, a 501c3 dog
              rescue organization. I love to experiment with new technologies,
              both frontend and backend, on my personal site. When I am not nerding out
              I enjoy watching hockey and driving fast cars.
            </p>
        </div>
      </section>
    );
  }
}
