import React from "react";
import ResultList from "./ResultList";
import $ from 'jquery';

class SearchBar extends React.Component {
  constructor(props) {
		super(props);
    this.searchResult = React.createRef();
		this.state = {term:''};
	}
	submitTheForm(event) {
		event.preventDefault();

		this.props.videoSearch(this.state.term);
	}
  clickedSearch = (event) => {
    this.setState({term: event.target.value});
    this.props.videoSearch(this.state.term);
  }
  onFocus = () => {
    $(this.searchResult.current).css('display', 'block');
  }
  onBlur = () => {
    setTimeout(() => {
      $(this.searchResult.current).css('display', 'none');
    }, 200)
  }

  render() {
    return (
      <div className="c-searchBar">
        <form
          className="c-searchBar__form"
          onSubmit={this.submitTheForm.bind(this)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          tabIndex="-1"
        >
          <input
            className="c-searchBar__searchInput"
            value={this.state.term}
            onChange= {this.clickedSearch}
            placeholder="Search on YouTube..."
          />
        </form>
        <div
          className="c-searchBar__results"
          ref={this.searchResult}
        >
          <ResultList
            onVideoSelect={this.props.onVideoSelect}
            videos={this.props.videos}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
