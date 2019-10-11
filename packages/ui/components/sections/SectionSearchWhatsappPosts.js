import React, { useState, useEffect } from 'react'
import {Box} from 'grommet'
import {MoleculeSearchInputForm} from '../molecules'

/**
* @author
* @function SectionSearchWhatsappPosts
**/

const SectionSearchWhatsappPosts = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
     <Box
        fill={'vertical'}
        width={'large'}
        direction={'column'}
        gap={'small'}
     >
        {/* {fetching && <h3>something</h3>} */}   
        <MoleculeSearchInputForm />
        <Box
            border={{color:'brand'}}
        >
           <h3>Result Area</h3>   
        </Box>      
    </Box>
 )
}

export default SectionSearchWhatsappPosts