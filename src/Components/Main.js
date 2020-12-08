import React, {Component} from 'react';
import Header from './Header';
import Filters from './Filters';
import Key from './Key';
import Players from './Players';

class Main extends Component {
    componentDidMount(){
        const {match} = this.props;
        let eid = Number(match.params.eid);
        // let eid=243;
        console.log(eid);
        this.props.startLoadingPlayers(eid);
    }
    render(){
        return <div className="container-fluid pl-0 pr-0 showcase">
                <Header/>
                <Key/>
                <Filters {...this.props} />
                <Players {...this.props} />
            </div>
    }
}

export default Main