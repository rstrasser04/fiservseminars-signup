import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 
class ATM extends Component {
    player = {}
    state = {
        video: {
            src: "https://fiservseminars-media.s3.amazonaws.com/Videos/ATM+Managed+Services+-+The+ATM+Channel+in+the+New+Normal.mp4",
            poster: "https://fiservseminars-media.s3.amazonaws.com/VideoOverlay.png"
        }
    }

    render() {
        return (
            <div className="live-video-session">
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="450"
                    height="300"
                />
            </div>
        );
    }
}
export default ATM;