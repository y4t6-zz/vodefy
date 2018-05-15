import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import HistoryList from "./HistoryList";

const API_KEY = 'AIzaSyCCIYMsLBHv1piOWTOemkPZ3Rs5KJPKMSE';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      videos:[],
      history: [],
      selectedVideo: null
    };

    $.ajax({
      url:'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=rihanna&type=video&key=' + API_KEY,
      success: function(videos) {
        this.setState({
          videos:videos.items,
          selectedVideo:videos.items[0]
        });
      }.bind(this)
    });
	}

  componentDidMount() {
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem('history');
    if(localStorageRef) {
      this.setState({
        history: JSON.parse(localStorageRef)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('history', JSON.stringify(this.state.history));
  }

  videoSearch(term) {
    if(term === '') term = 'rihanna';

		$.ajax({
      url:'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + term + '&key=' + API_KEY,
      success: function(videos) {
        this.setState({
          videos:videos.items,
          selectedVideo:videos.items[0]
        });
      }.bind(this)
    });
	}

  selectVideo = (selectedVideo, play) => {
    const stateHistory = this.state.history;
    if(!play) {
      stateHistory.push(selectedVideo);
      this.setState({
        selectedVideo: selectedVideo,
        history: stateHistory
      });
    } else {
      this.setState({
        selectedVideo: selectedVideo
      });
    }

  }

  findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
  }

  removeHistoryItem = (historyItem) => {
    const stateHistory = this.state.history;
    const indexInStateHistory = this.findWithAttr(this.state.history, 'etag', historyItem.etag);
    stateHistory.splice(indexInStateHistory, 1);
    localStorage.setItem('history', JSON.stringify(stateHistory));
    this.setState({
      history: stateHistory
    })
  }

  render() {
    return (
      <div className="c-app">
        <div className="c-app__header">
          <SearchBar
            videoSearch={(term) => this.videoSearch(term)}
            onVideoSelect={this.selectVideo}
            videos={this.state.videos}
          />
        </div>
        <div className="c-app__main">
          <div className="c-app__leftSidebar c-app__mainCell">
            <HistoryList
              removeHistoryItem={this.removeHistoryItem}
              history={this.state.history}
              onVideoSelect={this.selectVideo}
            />
          </div>
          <div className="c-app__content c-app__mainCell">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
