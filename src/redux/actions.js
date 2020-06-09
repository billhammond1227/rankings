import axios from 'axios';

export function startLoadingPlayers(){
    return (dispatch) => {
        return axios.get(`https://pastimetournaments.com/individuals/includes/rankings.php`)
        .then(res => {
            dispatch(loadPlayers(res.data))
            //console.log(res.data);
        }).catch( (error) => {
            console.log(error);
        });
    }
}

export function startFilters(position, state, gradyear, throws, sort, players){
    return (dispatch) => {
        let filteredplayers = players;
        filteredplayers.players = filteredplayers.all;
        if(position!==""){
            filteredplayers.players = filteredplayers.players.filter(player => player.primary_position===position||player.secondary_position===position)
        }
        if(state!==""){
            filteredplayers.players = filteredplayers.players.filter(player => player.state===state)
        }
        if(gradyear!==""){
            filteredplayers.players = filteredplayers.players.filter(player => player.grad_year===gradyear)
        }
        if(throws!==""){
            filteredplayers.players = filteredplayers.players.filter(player => player.throws===throws)
        }
        if(position===""&&state===""&&gradyear===""&&throws===""){
            filteredplayers.players = filteredplayers.all;
        }
        if(sort!==""){
            console.log(sort);
            if(sort==="name"){ filteredplayers.players.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1) }
            else if(sort==="primary"){ filteredplayers.players.sort((a, b) => (a.primary_position_velocity > b.primary_position_velocity) ? 1 : -1) }
            else if(sort==="secondary"){ filteredplayers.players.sort((a, b) => (a.secondary_position_velocity > b.secondary_position_velocity) ? 1 : -1) }
            else if(sort==="hitting"){ filteredplayers.players.sort((a, b) => (a.exit_velocity > b.exit_velocity) ? 1 : -1) }
            else if(sort==="state"){ filteredplayers.players.sort((a, b) => (a.state > b.state) ? 1 : -1) }
            else if(sort==="gradyear"){ filteredplayers.players.sort((a, b) => (a.grad_year > b.grad_year) ? 1 : -1) }
        }
        dispatch(loadFilteredPlayers(filteredplayers));
    }
}

export function loadPlayers(players){
    return {
        type: 'LOAD_PLAYERS',
        players: {
            players: players,
            all: players
        }
    }
}

export function loadFilteredPlayers(players){
    return {
        type: 'LOAD_PLAYERS',
        players: {
            players: players.players,
            all: players.all
        }
    }
}