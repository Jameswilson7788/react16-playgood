import React, { Component } from 'react';
import './Star.css';

class Star extends Component {
  render () {
    return (
      <div className="Star">
        <p
          onClick={this.props.click}
        >
          {this.props.name}
        </p>
        <p>{this.props.age}</p>
        <input type="text"
          onChange={this.props.changeName}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default star;