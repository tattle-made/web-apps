import defaultState from '../state/message'

export default function message(state=defaultState, action){
    if(action.type==='SET_APP_MESSAGE'){
        return{
            type : 'message',
            message: action.payload.message
        }
    }
    else if(action.type==='SET_APP_WARNING'){
        return{
            type : 'warning',
            message: action.payload.message
        }
    }
    else if(action.type==='SET_APP_ERROR'){
        return{
            type : 'error',
            message: action.payload.message
        }
    }
    else if(action.type==='RESET_APP_MESSAGE'){
        return defaultState
    }
    else return state
}
