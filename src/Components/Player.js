import React, {Component} from 'react';

class Player extends Component {
    render(){
        var Bats
        if(this.props.bats=="Right"){}
        else if(this.props.bats=="Left"){}
        else{}
        var Throws
        return <li className="list-group-item player" data-toggle="collapse" data-target={`#more-info-${this.props.plid}`} aria-expanded="false" aria-controls="collapseExample">
                <div className="row">
                    <div className="col-sm-2 player-name mb-2"><span class="d-block d-sm-block d-md-none">Player:&nbsp;</span>{ this.props.primary_position_status==="yes" ? <svg className="bi bi-person-check-fill check mr-2" width="1.5em" height="1.5em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/></svg>:"" }{`${this.props.first_name} ${this.props.last_name}`}</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">Primary:&nbsp;</span>{ this.props.primary_position }</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">P. Velo:&nbsp;</span>{this.props.primary_position_velo!==null&&this.props.primary_position_velo!==""&&this.props.primary_position_velo>0 ? `${this.props.primary_position_velo} MPH`:'N/A'}</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">Secondary:&nbsp;</span>{ this.props.secondary_position }</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">S. Velo:&nbsp;</span> {this.props.secondary_position_velo!==null&&this.props.secondary_position_velo!==""&&this.props.secondary_position_velo>0 ? `${this.props.secondary_position_velo} MPH`:'N/A'}</div>
                    <div className="col-sm"><span class="d-block d-sm-block d-md-none">Bats/Throws:&nbsp;</span>{ this.props.bats.charAt(0) } / { this.props.throws.charAt(0) }</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">Exit Velo:&nbsp;</span>{this.props.exit_velo!==null&&this.props.exit_velo!==""&&this.props.exit_velo>0 ? `${this.props.exit_velo} MPH`:'N/A'}</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">ST:&nbsp;</span>{ this.props.state }</div>
                    <div className="col-sm mb-2">HS: {this.props.high_school!=="" ? this.props.high_school:''}<br/><span class="d-block d-sm-block d-md-none">Grad Year:&nbsp;</span>{ this.props.grad_year }</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">NCSA:&nbsp;</span>{ this.props.ncsa!==null&&this.props.ncsa!=="" ? <a href={this.props.ncsa.includes("//") ? this.props.ncsa:`//${this.props.ncsa}`} target="_blank" rel="noopener noreferrer">NCSA Profile</a>:'N/A' }</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">Video:&nbsp;</span>{ this.props.primary_position_video!==null&&this.props.primary_position_video!=="" ? <a href={this.props.primary_position_video.includes("//") ? this.props.primary_position_video:`//this.props.primary_position_video}`} target="_blank" rel="noopener noreferrer">Click Here</a>:'N/A' }</div>
                    {/* <div className="col-1">
                        <svg className="bi bi-caret-down-fill arrow" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div> */}
                </div>
                {/* <div className="collapse" id={`more-info-${this.props.plid}`}>
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
                            <p className="title p-0 m-0">Other Stats</p>
                            {this.props.notes!==null&&this.props.notes!=="" ? <p dangerouslySetInnerHTML={{__html: this.props.notes}}></p>:'N/A'}
                        </div>
                        <div className="col-sm">
                            <p className="title p-0 m-0">NCSA</p>
                            { this.props.primary_position_video!==null ? <a href={this.props.primary_position_video} target="_blank" rel="noopener noreferrer"><img src={require('../images/thumbnail-video.jpg')} alt="Video" /></a>:''}
                            { this.props.ncsa!==null&&this.props.ncsa!=="" ? <a href={this.props.ncsa.includes("//") ? this.props.ncsa:`//${this.props.ncsa}`} target="_blank" rel="noopener noreferrer">NCSA Profile</a>:'N/A' }
                        </div>
                    </div>
                </div> */}
                </li>
                
    }
}

export default Player