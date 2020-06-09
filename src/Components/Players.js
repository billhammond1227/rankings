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
                            <div className="col">Player</div>
                            <div className="col">Primary</div>
                            <div className="col">Secondary</div>
                            <div className="col">Hitting</div>
                            <div className="col">State</div>
                            <div className="col">Grad Year</div>
                            <div className="col-1">&nbsp;</div>
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