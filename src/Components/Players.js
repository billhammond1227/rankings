import React, {Component} from 'react';
import Player from './Player';

class Players extends Component {
    getSafe(fn, defaultVal){
        try {
            return fn();
        }
        catch {
            return defaultVal;
        }
    }
    render(){
        console.log(this.props.state.players);
        return <div className="container players mb-5">
                    <ul className="list-group text-center">
                    <li className="list-group-item titles">
                        <div className="row">
                            <div className="col-sm-2">Player</div>
                            <div className="col-sm d-none d-sm-none d-md-block">State</div>
                            <div className="col-sm d-none d-sm-none d-md-block">PP/SP</div>
                            <div className="col-sm d-none d-sm-none d-md-block">60 Time</div>
                            <div className="col-sm d-none d-sm-none d-md-block">Top FB Time</div>
                            <div className="col-sm d-none d-sm-none d-md-block">Infield Velo</div>
                            <div className="col-sm d-none d-sm-none d-md-block">Outfield Velo</div>
                            <div className="col-sm d-none d-sm-none d-md-block">Bats/Throws</div>
                            <div className="col-sm d-none d-sm-none d-md-block">Exit Velo</div>
                            <div className="col-sm d-none d-sm-none d-md-block">Grad Year</div>
                            <div className="col-sm d-none d-sm-none d-md-block">Twitter</div>
                        </div>
                    </li>
                    {  
                        this.getSafe(() => 
                            this.props.state.players.players.map((player,index)=>(
                                <Player key={index} {...player}/>
                            ))
                        )
                    }
                </ul>
            </div>
    }
}

export default Players