import React, { useState, useEffect } from 'react'
import {Box, Text} from 'grommet'

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
    <Box>
        {/* {fetching && <h3>something</h3>} */}
        <Text size={'medium'}> {title}</Text>
        <Text size={'small'} truncate={true}> {url} </Text> 
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