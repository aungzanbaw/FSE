// dep packages
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// require files
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API = "AIzaSyAhAq06-bViigwt82Ymdmhy4Bf2GbS_GDY";

class App extends Component{
    constructor(props){
        super(props);
        
        this.state = { videos: [], selectedVideo: null }

        this.videoSearch('surfboards')
    }

    videoSearch(term){
        YTSearch({key: API, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))