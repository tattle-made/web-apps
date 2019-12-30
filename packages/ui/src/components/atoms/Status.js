import React, { useState, useEffect } from 'react'
import {Layer, Box, Text} from 'grommet'
import { X } from 'react-feather'
import { Spinner } from 'react-bootstrap'
import { Promise } from 'bluebird'

const color = {
    'error': 'status-error',
    'message' : 'status-ok',
    'loading': 'status-warning'
}

const spinning = (
    <svg
        version="1.1"
        viewBox="0 0 32 32"
        width="22px"
        height="22px"
        fill="#333333"
    >
        <path
        opacity=".25"
        d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur="0.8s"
            repeatCount="indefinite"
        />
        </path>
    </svg>
);

/**
* @author
* @function Status
**/

const Status = ({type, message}) => {
    useEffect(()=> {
        if(type!='loading'){
            Promise.delay(1000)
            .then(() => setVisibility(false))
        }
    }, [] );

    const [visibility, setVisibility] = useState(true);

    return(
        visibility &&
        <Layer
            position={'bottom-left'}
            modal={false}
            plain
            margin={'medium'}
            animation={'fadeIn'}
        >

            <Box 
                pad={'small'} 
                background={color[type]} 
                round={'xsmall'} 
                elevation={'medium'}
                direction={'row'}
                align={'center'}
                gap={'medium'}
            > 
                { type=='loading' && spinning }
                <Text> {message} </Text>
            </Box>
        </Layer>
    )
}

export default Status

Status.defaultProps = {
    type: 'message'
}

/*
type=loading ,ok, error
visibilty
*/