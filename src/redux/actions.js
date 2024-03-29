import axios from 'axios';

export function startLoadingPlayers(eid){
    return (dispatch) => {
        return axios.get(`https://pastimetournaments.com/individuals/includes/rankings.php?eid=${eid}&key=4ffc9b0491dbc7e3d87cc172`)
        .then(res => {
            dispatch(loadPlayers(res.data))
            console.log(res.data);
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
            //filteredplayers.players = filteredplayers.players.filter(player => player.primary_position===position)
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
            else if(sort==="primary"){ filteredplayers.players.sort((a, b) => (a.primary_position_velo < b.primary_position_velo) ? 1 : -1) 
            }
            else if(sort==="secondary"){ filteredplayers.players.sort(
                (a, b) => (a.secondary_position_velo < b.secondary_position_velo) ? 1 : -1) 
            }
            else if(sort==="dashtime"){ filteredplayers.players.sort(
                (a, b) => (a.dash_time < b.dash_time) ? 1 : -1) 
            }
            else if(sort==="fbtime"){ filteredplayers.players.sort(
                (a, b) => (a.fb_time < b.fb_time) ? 1 : -1) 
            }
            else if(sort==="infieldvelo"){ filteredplayers.players.sort(
                (a, b) => (a.infield_velo < b.infield_velo) ? 1 : -1) 
            }
            else if(sort==="outfieldvelo"){ filteredplayers.players.sort(
                (a, b) => (a.outfield_velo < b.outfield_velo) ? 1 : -1) 
            }
            else if(sort==="exitvelo"){ filteredplayers.players.sort(
                (a, b) => (a.exit_velo < b.exit_velo) ? 1 : -1) 
            }
            // else if(sort==="velocity"){
            //     if(position!==""){
            //         filteredplayers.players.sort((a, b) => (
            //             (a.primary_position===position && b.primary_position===position && a.primary_position_velo < b.primary_position_velo)
            //             ||(a.primary_position===position && b.secondary_position===position && a.primary_position_velo < b.secondary_position_velo)
            //             ||(a.secondary_position===position && b.secondary_position===position && a.secondary_position_velo < b.secondary_position_velo)
            //             ||(a.secondary_position===position && b.primary_position===position && a.secondary_position_velo < b.primary_position_velo)
            //             ? 1 : -1
            //         ))
            //     }
            //     else {
            //         filteredplayers.players.sort((a, b) => (a.primary_position_velo < b.primary_position_velo) ? 1 : -1)
            //     }
            // }
            // else if(sort==="secondary"&&position!==""){
            //     //filteredplayers.players.sort((a, b) => (a.primary_position_velo < b.primary_position_velo) ? 1 : -1)
            //     filteredplayers.players.sort((a, b) => (a.secondary_position===position ? a.secondary_position_velo < b.secondary_position_velo ? 1 : -1 : a.primary_position===position ? a.primary_position_velo < b.primary_position_velo ? 1 : -1 : -1))
            // }
            else if(sort==="hitting"){ filteredplayers.players.sort((a, b) => (a.exit_velo < b.exit_velo) ? 1 : -1) }
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