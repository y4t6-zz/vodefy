import React from "react";

class YouTube extends React.Component {
  render() {
    const videoSrc = "https://www.youtube.com/embed/" +
        this.props.video + "?autoplay=" +
        this.props.autoplay + "&rel=" +
        this.props.rel + "&modestbranding=" +
        this.props.modest;

    return (
      <div className="container">
        <iframe
          className="player"
          type="text/html"
          width="100%"
          height="500px"
          src={videoSrc}
          frameBorder="0"
          title={this.props.title}
        />
      </div>
    );
  }
}

export default YouTube;
