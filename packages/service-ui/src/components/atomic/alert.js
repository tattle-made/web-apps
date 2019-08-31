/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import {useSelector} from 'react-redux'

const COLOR_MAP = {
    'error': 'red.2',
    'warning': 'violet.2',
    'message': 'indigo.2'
}

const COLOR_MAP_SHADOW = {
    'error': 'red.4',
    'warning': 'violet.4',
    'message': 'indigo.4'
}

const Alert = (props) => {
    const message = useSelector(state=>state.message)

    return(
        message.type!='default'?
        <div sx={{
            position: 'absolute',
            bottom: '0.8em',
            zIndex: 4,
            px: 4,
            py: 2,
            marginLeft: 3,
            backgroundColor: COLOR_MAP[message.type],
            fontSize: 2,
            borderRadius: '0.2em',
            boxShadow: `0px 0px 10px`,
            color: COLOR_MAP_SHADOW[message.type]
        }}>
            <div sx={{
                color: 'text',
            }}> {message.message}</div>
        </div>
        :
        null
    )
}

export default Alert