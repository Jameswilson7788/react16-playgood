import React from 'react';
import './Star.css';

const star = props => {
    return (
        <div className="Star">
          <p onClick={props.click}>{props.name}</p>
          <p>{props.age}</p>
          <input type="text" onChange={ props.changeName } value= {props.name} />
        </div>
    );
};

export default star;