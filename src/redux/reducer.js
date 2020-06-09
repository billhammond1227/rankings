import defaultPlayers from '../data/players';
import {combineReducers} from 'redux';

function players(state = defaultPlayers, action){
    switch(action.type){
        case 'LOAD_PLAYERS': return action.players
        default: return state
    }
}

const rootReducer = combineReducers({players});

export default rootReducer