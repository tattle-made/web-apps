import {createAction} from './util'

function setAppMessage({message}) {
    return {
        type: 'SET_APP_MESSAGE',
        payload: {
            state: 'message',
            message: message
        }
    }
}

function setAppWarning({message}) {
    return {
        type: 'SET_APP_WARNING',
        payload: {
            state: 'warning',
            message: message
        }
    }
}

function setAppError({message}) {
    return {
        type: 'SET_APP_ERROR',
        payload: {
            state: 'error',
            message: message
        }
    }
}

function setAppLoading({message}) {
    return {
        type: 'SET_APP_LOADING',
        payload: {
            state: 'loading',
            message: message
        }
    }
}

const resetAppMessage = () => createAction('RESET_APP_MESSAGE')

export {
    setAppMessage,
    setAppWarning,
    setAppError,
    setAppLoading,
    resetAppMessage
}