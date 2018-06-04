import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary/Auxiliary';
import withClass from '../hoc/withClass';


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Trym', age: 28 },
        { id: '2', name: 'Ivar', age: 8 },
        { id: '3', name: 'Per', age: 58 },
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] component did mount');
    
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Update App.js] inside ShouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }
 
 componentWillUpdate(nextProps, nextState){
   console.log('[App.js] componentWillUpdate',nextProps, nextState);
 }
 
 componentDidUpdate(){
   console.log('[UPDATE App.js] componentDidUpdate');
 }

  // state = {
  //   persons: [
  //     { id: '1', name: 'Trym', age: 28 },
  //     { id: '2', name: 'Ivar', age: 8 },
  //     { id: '3', name: 'ArtigPer', age: 128 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => { 
      return { showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1 }
     });
  }

  render() {
  console.log('[App.js] Inside Render');
  
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
      <button onClick={() => {this.setState({showPersons:true})} }>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

