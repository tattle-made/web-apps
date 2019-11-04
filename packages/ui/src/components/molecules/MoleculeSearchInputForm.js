import React, { useState, useEffect } from 'react'
import {Box} from 'grommet'
import {MultiModalInput} from '../atoms'
import {Search} from 'react-feather'

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
    <Box direction={'row'}>
        <MultiModalInput/>
    </Box> 
 )
}

export default MoleculeSearchInputForm