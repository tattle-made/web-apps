import React, { useState, useEffect } from 'react'
import {Box} from 'grommet'
import {MultiModalInput} from '../atoms'

/**
* @author
* @function MoleculeSearchInputForm
**/

const MoleculeSearchInputForm = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <Box
    >
        <MultiModalInput/>
    </Box> 
 )
}

export default MoleculeSearchInputForm