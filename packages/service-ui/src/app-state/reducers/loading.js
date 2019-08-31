import defaultState from '../state/loading'

const loading = (state=defaultState, action) => {
    if(action.type==='SET_APP_LOADING'){
        return {
            state: 'loading',
            message : action.payload.message
        }
    }
    else if(action.type==='RESET_APP_LOADING') return defaultState
    else return state
}

export default loading