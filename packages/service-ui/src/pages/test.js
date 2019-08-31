/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../components/atomic/loading'
import Alert from '../components/atomic/alert'
import {setAppMessage,setAppWarning, setAppError, resetAppMessage} from '../app-state/actions/message'
import {setLoading, resetLoading} from '../app-state/actions/loading'

const Test = (props) => {
    const message = useSelector(state=>state.message)
    const dispatch = useDispatch()

    const hi= ()=>{
        console.log('clicked')
        //dispatch(resetLoading())
        dispatch(setLoading('fetching items'))
    }
    
    return(
        <div>
            <div sx={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                zIndex: 1
            }}>
                <h1> layer 1 </h1>
            </div>
            <div sx={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                zIndex: 2
            }}>
                <h1> layer 2 </h1>
            </div>
            {/* Modal Layer */}
            

            {/* Message Layer */}
            <Alert/>

            {/* Loading Layer */}
            <Loader/>

            <br/><br/><br/>
            <button onClick={hi}> CLICK </button>
            
        </div>
    )
}

export default Test;