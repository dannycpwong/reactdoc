import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <h1>Hello,Danny!</h1>,
    document.getElementById('root')
);

const myfirstelement = <h1>Testing!!</h1>;

ReactDOM.render(myfirstelement, document.getElementById('root'));

//react component must start with upper case and must have a render() method
class Car extends React.Component {

    // contructor function initiate the component's properties
    constructor() {
        super();
        this.state = {
            color: "red",
            brand: "Ford",
            model: "Mustang",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "green"});
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    it is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button 
                    type="button"
                    onClick={this.changeColor}>Change color!</button>
            </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById('root'));

// props are like function arguments and you send them into component as attribute
class Cars extends React.Component {
    render() {
        return <h2> I am a {this.props.color} Car!!!</h2>
    }
}
ReactDOM.render(<Cars color="blue"/>, document.getElementById('root'));


class Garage extends React.Component{
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand="Corolla"/>
            </div>
        )
    }
}
ReactDOM.render(<Garage />, document.getElementById('root'));


//components in files can be exported using the code below
export default Garage;

//to import you must add in the import code
// import React from 'react';
// import ReactDom from 'react-dom';
// import Garage from './index.js';

//React State
// state object is where you store property values that belongs to the component
//state object is specify in the constructor

//DOM - document object model
//3 main phases of component lifecycle: mounting, updating and unmounting
//Mounting - putting element into the DOM
// constructor(), getDerivedStateFromProps(), render(), componentDidMount()
// render() is required the others are optional

//updating whenever there is a change in the component's state or props
//5 built-in methods
// getDerivedStateFromProps(), should ComponentUpdate(), render(), getSnapshotBeforeUpdate(),componentDidUpdate()
// getSnapshotBeforeUpdate() should be complemented with componentDidUpdate()

//Unmounting
//componentWillUnmount()


//react events
//react events are writen in camelCase Syntax and event handlers are written inside curly braces


class Football extends React.Component {
    shoot = (a) => {
        alert(a);
    }

    // render() {
    //     return (
    //         <button onClick={() => this.shoot("Goal")}>take the shot!</button>
    //     )
    // }
    render() {
        return (
            <button onClick={this.shoot.bind(this,"Goal")}>Take the shot!</button>
        )
    }
}



ReactDOM.render(<Football />, document.getElementById('test'));
