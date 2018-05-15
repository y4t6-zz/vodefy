import React from "react";
import YT from 'react-youtube';

class YouTube extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div className="container">
        <YT
          videoId={this.props.video}
          opts={opts}
          onReady={this._onReady}
        />
      </div>

    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default YouTube;
