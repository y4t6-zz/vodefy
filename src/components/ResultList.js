import React from "react";
import ResultItem from "./ResultItem";

class ResultList extends React.Component {
  render() {
  	return (
  		<ul className="c-resultList">
        {this.props.videos.map((video) => (
          <ResultItem
             onVideoSelect={this.props.onVideoSelect}
             key={video.etag}
             video={video}
          />
        ))}
  		</ul>
  	)
  }
}

export default ResultList;
