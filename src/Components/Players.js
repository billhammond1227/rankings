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
                            <div className="col-2">Player</div>
                            <div className="col">Primary</div>
                            <div className="col">Velocity</div>
                            <div className="col">Secondary</div>
                            <div className="col">Velocity</div>
                            <div className="col">Bats/Throws</div>
                            <div className="col">Exit Velo</div>
                            <div className="col">State</div>
                            <div className="col">Grad Year</div>
                            <div className="col">NCSA</div>
                            <div className="col">Video</div>
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