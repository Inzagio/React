import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] Inside Render');

        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated! </p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

//Ruleset for props in Person state object.
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);