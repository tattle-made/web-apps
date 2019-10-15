import React, { useState, useEffect } from 'react'
import {Box, Heading} from 'grommet'
import {MoleculeSearchInputForm} from '../molecules'
import {MultipleWithClickMoreButton} from '../atoms/MediaBlock'

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
        direction={'column'}
        gap={'medium'}
     >
        <Box
            width={'large'}
            direction={'column'}
            gap={'medium'}
         >
            <MoleculeSearchInputForm />
         </Box>
        <MultipleWithClickMoreButton
            label={'Similar Posts'}
        ></MultipleWithClickMoreButton>     
    </Box>
 )
}

export default SectionSearchWhatsappPosts