import React from 'react';

class Video extends React.Component {
    constructor (props){
        super();
    }

    showAllVideoSources = () => this.props.videoSouces.map((source)=>{
        <source src={source.src} type={source.type} />
    })

    render() {
        return <video width={ this.props.width } height={ this.props.height } controls>
            <ul>{this.showAllVideoSources.bind(this)}</ul>
        </video>
    }
}

export default Video;