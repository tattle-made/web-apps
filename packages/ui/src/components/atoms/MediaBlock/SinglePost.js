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
  console.log('====')
  console.log({type, src})
})

const onMouseEnter = ()=> setHover(true);
const onMouseLeave = ()=> setHover(false);

 return (
    <ResponsiveContext.Consumer>
    {(size)=>(
        <Box
        width={boxDimension[size]}
        height={{ min : boxDimension[size]}}
        border={{color: type=='error' ? 'status-error' : 'border'}}
        onMouseEnter = {onMouseEnter}
        onMouseLeave = {onMouseLeave}
        round={'xsmall'}
        overflow={'hidden'}
        >
            <Box
                fill
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

            {/*<Box pad={'xsmall'}>
                <TagLabel size={'small'} weight={600} level={6}> Tags </TagLabel>
                <Text> libero, felis, posuere, non, consectetur </Text>
            </Box>*/}

            { type!='error' &&
                <Box pad={'small'}>
                    <Text size={'medium'}> {heading} </Text>
                    <Text size={'small'}> {body} </Text>
                    <Text size={'xsmall'}> {Moment(timestamp).format('lll')} </Text>
                </Box>
            }

        </Box>

    
        // { hover &&
        //     <Box background="light-1" 
        //         opacity={'weak'} 
        //         direction={'row'} 
        //         gap={'xsmall'} 
        //         pad={'xsmall'} 
        //         onMouseEnter={onMouseEnter}
        //     >
        //         <Edit size={20}/> 
        //         <Maximize2 size={20}/> 
        //     </Box>
        // }
    )}
    </ResponsiveContext.Consumer>
 )
}

export default SinglePost