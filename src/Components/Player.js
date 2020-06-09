import React, {Component} from 'react';

class Player extends Component {
    render(){
        return <li className="list-group-item player" data-toggle="collapse" data-target={`#more-info-${this.props.plid}`} aria-expanded="false" aria-controls="collapseExample">
                <div className="row">
                    <div className="col player-name">{`${this.props.first_name} ${this.props.last_name}`}</div>
                    <div className="col">{ this.props.primary_position }{this.props.primary_position_velo!==null&&this.props.primary_position_velo!==""&&this.props.primary_position_velo>0 ? ` - ${this.props.primary_position_velo} MPH`:' - N/A'}</div>
                    <div className="col">{ this.props.secondary_position }{this.props.secondary_position_velo!==null&&this.props.secondary_position_velo!==""&&this.props.secondary_position_velo>0 ? ` - ${this.props.secondary_position_velo} MPH`:' - N/A'}</div>
                    <div className="col">{this.props.exit_velo!==null&&this.props.exit_velo!==""&&this.props.exit_velo>0 ? `${this.exit_velo} MPH`:'N/A'}</div>
                    <div className="col">{ this.props.state }</div>
                    <div className="col">{ this.props.grad_year }</div>
                    <div className="col-1">
                        <svg className="bi bi-caret-down-fill arrow" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
                <div className="collapse" id={`more-info-${this.props.plid}`}>
                    <div className="player-more-info pt-2 row">
                        <div className="col-sm">
                            <p className="title p-0 m-0">Bats/Throws</p>
                            <p>{`${this.props.bats}/${this.props.throws}`}</p>
                        </div>
                        <div className="col-sm">
                            <p className="title p-0 m-0">Height/Weight</p>
                            <p>{`${this.props.height}/${this.props.weight}`}</p>
                        </div>
                        <div className="col-sm">
                            <p className="title p-0 m-0">Travel Team</p>
                            <p>{this.props.team_name!=="" ? this.props.team_name:'N/A'}</p>
                        </div>
                        <div className="col-sm">
                            <p className="title p-0 m-0">NCSA</p>
                            { this.props.primary_position_video!==null ? <a href={this.props.primary_position_video} target="_blank"><img src={require('../images/thumbnail-video.jpg')} alt="Video" /></a>:''}
                            { this.props.ncsa!==null&&this.props.ncsa!=="" ? <a href={this.props.ncsa.includes("//") ? this.props.ncsa:`//${this.props.ncsa}`} target="_blank" rel="noopener noreferrer">NCSA Profile</a>:'N/A' }
                        </div>

                    </div>
                </div>
                </li>
                
    }
}

export default Player