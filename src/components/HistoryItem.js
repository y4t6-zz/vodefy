import React from "react";

class HistoryItem extends React.Component {
  render() {
    const history = this.props.history;

    return (
      <li className="c-resultItem">
        <h3
          onClick={() => this.props.onVideoSelect(history, true)}
        >
          {history.snippet.title}
        </h3>
        <button
          className="c-button"
          onClick={() => this.props.removeHistoryItem(history)}
        >
          Delete
        </button>
  		</li>
    );
  }
}

export default HistoryItem;
