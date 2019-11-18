import React, {Component} from 'react';
//port logo from './assets/images/logo.svg';
import './assets/css/App.css';

//import Home from './components/Home'
//import News from "./components/News";
//import Data from './components/Data'
import TodoList from './components/TodoList'


class App extends Component{
    render() {
        return (
            <div className="App">
                hello
                <TodoList/>
            </div>
        )
    }
}


export default App;
