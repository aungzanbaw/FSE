import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const VideoDetail = ({video}) => {
    console.log(video)
    if(!video){
        return <div>Loading....</div>;
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(url);

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;