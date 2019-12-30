import React, { useState, useEffect } from 'react'
import {Box, Text} from 'grommet'
import { ExternalLink } from 'react-feather';

/**
* @author
* @function SingleLink
**/

const SingleLink = ({title, url, timestamp}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <Box margin={{bottom:'small'}}>
        {/* {fetching && <h3>something</h3>} */}
        <Box direction={'row'} align={'center'} gap={'small'}>
          <Text size={'medium'}> {title}</Text>
          <a href={url} target='_blank'>
            <ExternalLink size={14}/>
          </a>
        </Box>
        
        <Text size={'small'}> {timestamp} </Text>
    </Box>
 )
}

SingleLink.defaultProps = {
    title: "",
    url: "",
    timestamp : ""
}

export default SingleLink