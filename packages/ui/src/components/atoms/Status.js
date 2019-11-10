import React, { useState, useEffect } from 'react'
import {Layer, Box, Text} from 'grommet'

/**
* @author
* @function Status
**/

const color = {
    'error': 'status-error',
    'ok' : 'status-ok',
    'loading': 'status-warning'
}

const Status = ({visibility, type, message}) => {

return (
    visibility &&
    <Layer
        position={'bottom-left'}
        modal={false}
        plain
        margin={'medium'}
        animation={'none'}
    >
        <Box 
            pad={'small'} 
            background={color[type]} 
            round={'xsmall'} 
            elevation={'medium'}
        > 
            <Text> {message} </Text>
        </Box>
    </Layer>
)
}

export default Status

Status.defaultProps = {
    visibility: false,
    type: 'message'
}

/*
type=loading ,ok, error
visibilty
*/