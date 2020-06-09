import React, {Component} from 'react';
//import {Route} from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import Key from './Key';
import Players from './Players';

class Main extends Component {
    componentDidMount(){
        this.props.startLoadingPlayers();
        console.log("Component Did Mount");
    }
    render(){
        return <div className="container-fluid pl-0 pr-0 showcase">
            <Header/>
            <Filters {...this.props} />
            <Key/>
            <Players {...this.props} />
        </div>
    }
}

export default Main