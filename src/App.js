import {Component} from 'react';
// Imported component from react library

import './App.css';

class App extends Component {
    // Created constructor to create state of this class
    constructor() {
        super();
        this.state = {
            name: {
                firstname: 'miguel',
                lastname: 'romero'
            },
        };
    }

    // Built in react function to render html
    render() {
        return (
            <div className='App'>
                <h1>{this.state.name.firstname.toUpperCase()} {this.state.name.lastname.toUpperCase()}</h1>
                <button onClick={()=>{
                    this.setState({name:{
                        firstname: "chris",
                            lastname: "pro"
                        }

                        })
                }}>switch</button>
            </div>
        );
    }

}

export default App;
