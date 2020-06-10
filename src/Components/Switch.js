import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Main from './Main';

class Switch extends Component {
    render(){
        return <Route path="/stats/:eid" render={(params) => (
            <Main {...this.props} {...params}/>
        )}
        />
    }
}

export default Switch