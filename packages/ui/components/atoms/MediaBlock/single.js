import React, { useState, useEffect } from 'react'
import {Box, Image, Video, Heading, Text} from 'grommet'

/**
* @author
* @function Single
**/

const Single = ({type}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <Box
        width={'16em'}
        border={{color:'border'}}
        round={'xsmall'}
        overflow={'hidden'}
    >
        <Box
            width={'16em'}
            height={'16em'}
        >
            {
                type=='image'?
                <Image
                    fit="cover"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg"
                />:
                type=='video'?
                <Video controls="over" fit="cover">
                    <source key="video" src="https://ia800304.us.archive.org/23/items/cachoeirap/cachoeirap_512kb.mp4" type="video/mp4" />
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

        <Box pad={'xsmall'}>
            <Text size={'small'} weight={600} level={6}> Tags </Text>
            <Text> libero, felis, posuere, non, consectetur </Text>
        </Box>
    </Box>
 )
}

export default Single