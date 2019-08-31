import {createAction} from './util'

function setLoading(message){
    return createAction(
        'SET_APP_LOADING', 
        {
            message
        }
    )
}

const resetLoading = () => createAction('RESET_APP_LOADING')

export {
    setLoading,
    resetLoading
}
