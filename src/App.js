import React, { Component } from 'react';
import './App.css';
import Star from './Star/Star.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Weigo', age: 25 },
      { name: 'Penny', age: 21 },
      { name: 'Glace', age: 29 }
    ],
    name: '',
    showStar: false,
    showSuperStar: false
  }

  switchNameHandler (event) {
    this.setState({
      persons: [
        { name: 'Weigo', age: 26 },
        { name: 'Penny', age: 22 },
        { name: 'Glace', age: 30 }
      ]
    });
  }

  deleteNameHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //remove array;
    this.setState({persons}); 
  }

  bindingNameHandler = event => {
    this.setState({
      persons: [
        {id: 1, name: 'Weigo', age: 26 },
        {id: 2, name: 'Penny', age: 22 },
        {id: 3, name: 'Galce', age: 30 }
      ]
    });
  }

  toggleStarHandler = () => {
    const doneShowStar = this.state.showStar;
    this.setState({showStar: !doneShowStar});
  }

  changeNameHandler = (event, id) => { 
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  }


  render() {
    let superStar = null;
    
    if (!this.showSuperStar) {
      superStar = (
        <Star 
          className="SuperStar" 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          changeName={this.bindingNameHandler} 
        /> 
      );
    }

    return (
      <div className="App">
        { this.state.showStar === true ? 
          <Star 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
          />
          : null
        }
        
        {
          this.state.persons.map((person, index) => 
          <Star 
            name={person.name} 
            age={person.age} 
            click={this.deleteNameHandler.bind(this, index)} 
            key={person.id}
            changeName={event => this.changeNameHandler(event, person.id)}
          />)
        }
        <button
          onClick={ this.toggleStarHandler.bind(this) }
        >ToggleStar</button>
      </div>
    );
  }
}

export default App;
