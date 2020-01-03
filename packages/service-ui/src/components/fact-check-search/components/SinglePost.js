import React, { useState, useEffect } from 'react'
import {Box, Stack, Image, Video, Heading, Text, ResponsiveContext} from 'grommet'
import {Edit, Maximize2} from 'react-feather'
import styled from 'styled-components'
import Moment from 'moment';

/**
* @author
* @function Single
**/

// const TagLabel = styled(Text)`
//     line-height: 2.2em
// `

const boxDimension = {
    'medium' : '12em',
    'small' : '18em'
}

const SinglePost = ({type, src, heading, body, timestamp}) => {
  const [fetching, setFetching] = useState(false)
  const [hover, setHover] = useState(false)

useEffect(()=> {
  setFetching(true)
})

const onMouseEnter = ()=> setHover(true);
const onMouseLeave = ()=> setHover(false);

 return (
    <ResponsiveContext.Consumer>
    {(size)=>(
        <Box
        width={boxDimension[size]}
        border={{color: type=='error' ? 'status-error' : 'border'}}
        onMouseEnter = {onMouseEnter}
        onMouseLeave = {onMouseLeave}
        round={'xsmall'}
        overflow={'hidden'}
        >
            <Box
                width={boxDimension[size]}
                height={boxDimension[size]}
            >
                {
                    type=='image'?
                    <Image
                        fit="cover"
                        src={src}
                    />:
                    type=='video'?
                    <Video controls="over" fit="cover">
                        <source key="video" src={src} type="video/mp4" />
                        <track
                            key="cc"
                            label="English"
                            kind="subtitles"
                            srcLang="en"
                            src="/assets/small-en.vtt"
                            default
                        />
                    </Video> :
                    null
                }
            </Box>    


            { type!='error' &&
                <Box pad={'small'}>
                    <Text size={'medium'}> {heading} </Text>
                    <Text size={'small'}> {body} </Text>
                    <Text size={'xsmall'}> {Moment(timestamp).format('lll')} </Text>
                </Box>
            }

        </Box>
    )}
    </ResponsiveContext.Consumer>
 )
}

export default SinglePost