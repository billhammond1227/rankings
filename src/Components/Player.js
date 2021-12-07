import React, {Component} from 'react';

class Player extends Component {
    render(){
        return <li className="list-group-item player" data-toggle="collapse" data-target={`#more-info-${this.props.plid}`} aria-expanded="false" aria-controls="collapseExample">
                <div className="row">
                    <div className="col-sm-2 player-name mb-2"><span class="d-block d-sm-block d-md-none">Player:&nbsp;</span>{ this.props.primary_position_status==="yes" ? <svg className="bi bi-person-check-fill check mr-2" width="1.5em" height="1.5em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/></svg>:"" }
                    { this.props.ncsa!==null&&this.props.ncsa!=="" ? <a href={this.props.ncsa.includes("//") ? this.props.ncsa:`//${this.props.ncsa}`} target="_blank" rel="noopener noreferrer">${this.props.first_name} ${this.props.last_name}</a>:`${this.props.first_name} ${this.props.last_name}` }
                    </div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">ST:&nbsp;</span>{ this.props.state }</div>
                    <div className="col-sm mb-2">{ this.props.primary_position }/{ this.props.secondary_position }</div>
                    <div className="col-sm"><span class="d-block d-sm-block d-md-none">60 Time:&nbsp;</span>{this.props.dash_time!==null&&this.props.dash_time!==""&&this.props.dash_time>0 ? `${this.props.dash_time}`:'N/A'}</div>
                    <div className="col-sm"><span class="d-block d-sm-block d-md-none">FB Velo:&nbsp;</span>{this.props.fb_velo!==null&&this.props.fb_velo!==""&&this.props.tb_time>0 ? `${this.props.fb_velo}`:'N/A'}</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">INF Velo:&nbsp;</span>{this.props.infield_velo!==null&&this.props.infield_velo!==""&&this.props.infield_velo>0 ? `${this.props.infield_velo} MPH`:'N/A'}</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">OF Velo:&nbsp;</span>{this.props.outfield_velo!==null&&this.props.outfield_velo!==""&&this.props.outfield_velo>0 ? `${this.props.outfield_velo} MPH`:'N/A'}</div>
                    <div className="col-sm"><span class="d-block d-sm-block d-md-none">Bats/Throws:&nbsp;</span>{ this.props.bats.charAt(0) } / { this.props.throws.charAt(0) }</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">Exit Velo:&nbsp;</span>{this.props.exit_velo!==null&&this.props.exit_velo!==""&&this.props.exit_velo>0 ? `${this.props.exit_velo} MPH`:'N/A'}</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">Grad Year:&nbsp;</span>{ this.props.grad_year }</div>
                    <div className="col-sm mb-2"><span class="d-block d-sm-block d-md-none">Twitter:&nbsp;</span>{ this.props.twitter_account!==null&&this.props.twitter_account!=="" ? <a href={this.props.twitter_account.includes("//") ? this.props.twitter_account:`//${this.props.twitter_account}`} target="_blank" rel="noopener noreferrer">Click Here</a>:'N/A' }</div>
                </div>
                </li>
                
    }
}

export default Player