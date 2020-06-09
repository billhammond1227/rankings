import React, {Component} from 'react';

class Filters extends Component {
    constructor(){
        super();
        this.state = {
            position: "",
            state: "",
            gradyear:"",
            throws:"",
            sort:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        switch(event.target.id){
            case 'position': 
                this.setState({ position: event.target.value });
                this.props.startFilters(event.target.value, this.state.state, this.state.gradyear, this.state.throws, this.state.sort, this.props.state.players);
                break;
            case 'state': this.setState({ state: event.target.value }); 
                this.props.startFilters(this.state.position, event.target.value, this.state.gradyear, this.state.throws, this.state.sort, this.props.state.players);    
                break;
            case 'gradyear': this.setState({ gradyear: event.target.value });
                this.props.startFilters(this.state.position, this.state.state, event.target.value, this.state.throws, this.state.sort, this.props.state.players);    
                break;
            case 'throws': this.setState({ throws: event.target.value });
                this.props.startFilters(this.state.position, this.state.state, this.state.gradyear, event.target.value, this.state.sort, this.props.state.players);    
                break;
            case 'sort': this.setState({ sort: event.target.value });
                this.props.startFilters(this.state.position, this.state.state, this.state.gradyear, this.state.throws, event.target.value, this.props.state.players);
                break;
            default: this.setState({
                position: "",
                state: "",
                gradyear:"",
                throws:"",
                sort:""
            });
            break;
        }
    }
    resetForm(){
        this.form.reset();
        this.setState({
            position: "",
            state: "",
            gradyear:"",
            throws:"",
            sort:""
        });
        this.props.startFilters("","","","","",this.props.state.players);
    }
    render(){
        return <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
            <div className="container filters pt-4 pb-4">
            <div className="row">
                <div className="col-sm">
                    <label className="vis-hide">All</label>
                    <button type="button" className="form-control" onClick={this.resetForm}>All</button>
                </div>
                {/* POSITION */}
                <div className="col-sm form-group">
                    <label htmlFor="position">Position</label>
                    <select className="form-control" id="position" onChange={this.handleSubmit}>
                        <option value="">All</option>
                        <option value="Pitcher">Pitcher</option>
                        <option value="Catcher">Catcher</option>
                        <option value="1B">1B</option>
                        <option value="2B">2B</option>
                        <option value="3B">3B</option>
                        <option value="SS">SS</option>
                        <option value="OF">OF</option>
                    </select>
                </div>
                {/* STATE */}
                <div className="col-sm form-group">
                    <label htmlFor="state">State</label>
                    <select className="form-control" id="state" onChange={this.handleSubmit}>
                        <option value="">All</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                {/* GRAD YEAR */}
                <div className="col-sm form-group">
                    <label htmlFor="grad-year">Grad Year</label>
                    <select className="form-control" id="gradyear" onChange={this.handleSubmit}>
                        <option value="">All</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                {/* THROWS */}
                <div className="col-sm form-group">
                    <label htmlFor="throws">Throws</label>
                    <select className="form-control" id="throws" onChange={this.handleSubmit}>
                        <option value="">All</option>
                        <option value="Left">Left</option>
                        <option value="Right">Right</option>
                    </select>
                </div>
                {/* SORT */}
                <div className="col-sm form-group">
                    <label htmlFor="sort">Sort</label>
                    <select className="form-control" id="sort" onChange={this.handleSubmit}>
                        <option value=""></option>
                        <option value="name">Player Name</option>
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="hitting">Hitting</option>
                        <option value="state">State</option>
                        <option value="gradyear">Grad Year</option>
                    </select>
                </div>
            </div>
        </div>
        </form>
    }
}

export default Filters