import React, { useState, useEffect } from 'react'
import Single from './single'
import {Box, Heading} from 'grommet'

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
        border={{color:'brand'}}
        pad={'small'}
        width={'100em'}
    >
     {label && <Heading level={4}>{label}</Heading>} 
     <Box
        direction={'row'}
        gap={'small'}
        >
        
        <Single type={'video'}/>
        <Single type={'image'}/>
    </Box>   
   </Box>
 )
}

export default MultipleWithClickMoreButton