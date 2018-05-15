import React from "react";

class ResultItem extends React.Component {
  render() {
    const video = this.props.video;
  	const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li className="c-resultItem">
        <div className="c-resultItem__main">
          <div className="c-resultItem__cell">
            <img
              className="c-resultItem__thumbnail"
              src={imageUrl}
              alt={video.snippet.title}
            />
          </div>
          <div className="c-resultItem__cell c-resultItem__cell--description">
            <h3 className="c-resultItem__title">{video.snippet.title}</h3>
          </div>
          <div className="c-resultItem__cell c-resultItem__cell--buttonWrap">
            <button
              className="c-button"
              onClick={() => this.props.onVideoSelect(video)}
            >
              Play
            </button>
          </div>
        </div>
  		</li>
    );
  }
}

export default ResultItem;
