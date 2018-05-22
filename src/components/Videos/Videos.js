import { React, Component } from 'react';
import Video from './Video/Video';

class Videos extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoSources: [
                { type: 'video/mp4', src: '../Blacked.mp4' },
                { type: 'video/ogg', src: '../Blacked.ogg' }
            ],
            width: '500px',
            height: '500px',
        }
    }

    render () {
        return (
            <div className="videos">
                <Video 
                    width={this.state.width} 
                    height={this.state.height}
                    videoSources={[...this.state.videoSources]} 
                />
            </div>
        );
    }
}

export default Videos;