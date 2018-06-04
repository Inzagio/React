import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);

  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[Persons.js] component did mount');
 }

 componentWillReceiveProps(nextProps){
   console.log('Update Persons.js inside Comp will rec props', nextProps);
   
 }
//  shouldComponentUpdate(nextProps,nextState){
//    console.log('[Update Persons.js] inside ShouldComponentUpdate', nextProps, nextState);
//    return nextProps.persons !== this.props.persons || 
//    nextProps.changed !== this.props.changed ||
//    nextProps.clicked !== this.props.clicked;
//    //return true;
//  }

componentWillUpdate(nextProps, nextState){
  console.log('[Persons.js] componentWillUpdate',nextProps, nextState);
}

componentDidUpdate(){
  console.log('[UPDATE Persons.js] componentDidUpdate');
}

  render() {
    console.log('[Persons.js] INside render');
    
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}
export default Persons;
