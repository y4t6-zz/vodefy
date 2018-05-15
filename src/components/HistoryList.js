import React from "react";
import HistoryItem from "./HistoryItem";

class HistoryList extends React.Component {
  render() {
  	return (
  		<ul className="c-resultList">
        {this.props.history.map((history, index) => (
          <HistoryItem
             removeHistoryItem={this.props.removeHistoryItem}
             onVideoSelect={this.props.onVideoSelect}
             history={history}
             key={index}
          />
        ))}
  		</ul>
  	)
  }
}

export default HistoryList;
