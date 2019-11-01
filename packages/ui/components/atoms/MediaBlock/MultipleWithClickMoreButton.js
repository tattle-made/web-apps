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
        
        {/* <SinglePost 
            type={'video'}
            src={"https://ia800304.us.archive.org/23/items/cachoeirap/cachoeirap_512kb.mp4"}
        /> */}
        <SinglePost 
            type={'image'}
            src={"https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/image-posts%2F06c1eaa0-feea-42e5-8eee-b3ab3b099831?alt=media&token=cf1b9b4f-fa1f-48e4-8d64-82476cfeec1a"}
        />
        <SinglePost 
            type={'image'}
            src={"https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/image-posts%2F425f24f2-eda6-4e9f-99ec-d0eeb0b64db4?alt=media&token=fdbbb89f-1662-4652-9037-768a9d8b7424"}
        />

        <Button
            icon={<MoreHorizontal/>}
        />

    </Box>   
   </Box>
 )
}

export default MultipleWithClickMoreButton