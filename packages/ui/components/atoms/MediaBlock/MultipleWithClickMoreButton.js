import React, { useState, useEffect } from 'react'
import SinglePost from './SinglePost'
import {Box, Heading, Button} from 'grommet'
import {MoreHorizontal} from 'react-feather'

/**
* @author
* @function MultipleWithClickMoreButton
**/

const MultipleWithClickMoreButton = ({label, items}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <Box
        width={'100em'}
    >
     {label && <Heading level={4}>{label}</Heading>} 
     <Box
        direction={'row'}
        gap={'small'}
        align={'center'}
        >
        
        <SinglePost 
            type={'video'}
            src={"https://ia800304.us.archive.org/23/items/cachoeirap/cachoeirap_512kb.mp4"}
        />
        <SinglePost 
            type={'image'}
            src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg"}
        />

        <Button
            icon={<MoreHorizontal/>}
        />

    </Box>   
   </Box>
 )
}

export default MultipleWithClickMoreButton