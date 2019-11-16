import React, {Component} from 'react';
//port logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Home from './componets/Home'
import News from "./componets/News";

class App extends Component{
    render() {
        return (
            <div className="App">
                hello
                <Home/>
                <News/>
            </div>
        )
    }
}


export default App;
