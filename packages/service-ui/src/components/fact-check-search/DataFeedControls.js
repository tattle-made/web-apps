import React, { useState, useEffect } from 'react'
import {Box, Heading, Text, CheckBox, Button} from 'grommet'

/**
* @author
* @function DataFeedControls
**/

const DataFeedControls = ({onChange}) => {
    const [textCheck, setTextCheck] = React.useState(true);
    const [imageCheck, setImageCheck] = React.useState(true);
    const [videoCheck, setVideoCheck] = React.useState(true);

    const setValue = {
        text : setTextCheck,
        image : setImageCheck,
        video : setVideoCheck 
    }

    const getFilterParams = () => ({
        text : textCheck,
        image : imageCheck,
        video : videoCheck
    })

    useEffect(()=> {
        //setFetching(true)
    })

    const onOptionClicked = (type, checked) => {
        setValue[type](checked)
        console.log(getFilterParams())
        //onChange(getFilterParams())
    }

    return (
        <Box direction={'row'} 
            fill={'horizontal'}
            gap={'medium'}
            align={'center'}
        >
            <Box align={'baseline'}> <Heading level={'2'} margin={'none'}> Data </Heading> </Box>
            <Box direction={'row'} 
                gap={'small'}
                align={'baseline'}
                wrap={true}
            >
                <CheckBox checked={textCheck} label={'text'} onChange={(e)=>onOptionClicked('text', e.target.checked)} />
                <CheckBox checked={imageCheck} label={'image'} onChange={(e)=>onOptionClicked('image', e.target.checked)} />
                <CheckBox checked={videoCheck} label={'video'} onChange={(e)=>onOptionClicked('video', e.target.checked)} />
            </Box>
        </Box>
    )
}

export default DataFeedControls