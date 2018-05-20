import React from 'react';
import Star from './Star/Star';

const Stars = props => 
    props.persons.map((person, index) => (
        <Star
            name={person.name}
            age={person.age}
            click={ () => props.deleteNameHandler(index) }
            key={person.id}
            changeName={event => props.changeNameHandler(event, person.id)}
        />)
    );

export default Stars;