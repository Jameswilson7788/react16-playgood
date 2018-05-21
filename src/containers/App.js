import React, { Component } from 'react';
import './App.css';
import Star from '../components/Stars/Star/Star';
import Stars from '../components/Stars/Stars';
import Video from '../components/Videos/Video';

class App extends Component {
  state = {
    persons: [
      {id:1, name: 'Weigo', age: 25 },
      {id:2, name: 'Penny', age: 21 },
      {id:3, name: 'Glace', age: 29 }
    ],
    videoSources: [
      {
        type: 'mp4',
        src: '../Blacked.mp4'
      }
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
    if (this.state.persons[0] === undefined) return;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //remove array;
    this.setState({persons}); 
  }

  bindingNameHandler = event => {
    this.setState({
      persons: [{
          id: 1,
          name: 'Weigo',
          age: 26
        },
        {
          id: 2,
          name: 'Penny',
          age: 22
        },
        {
          id: 3,
          name: 'Glace',
          age: 30
        }
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
  
  changeColorHandler = (style) => {
    this.setState({style});
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
        <Stars persons={ this.state.persons }/>  
      
        <button
          style= {this.state.style}
          onClick= { this.changeColorHandler.bind(this, {backgroundColor:'red'}) }
        >ToggleStar</button>
        <Video width="500" height="500" videoSources={ this.state.videoSources }></Video>
      </div>
    );
  }
}

export default App;
