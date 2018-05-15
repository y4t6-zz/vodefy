import React from "react";
import YouTube from "./YouTube";

class VideoDetail extends React.Component {
  render() {
    const video = this.props.video;

  	if (!video) {
  		return <div>Loading...</div>;
  	}
  	const videoId = video.id.videoId;

    return (
      <div className="video-detail col-md-8">
        <YouTube
          video={videoId}
          autoplay="0"
          rel="0"
          modest="1"
        />
		  </div>
    );
  }
}

export default VideoDetail;
