import React, { useState, useEffect } from 'react'
import {Box} from 'grommet'
import {MultiModalInput} from '../atoms'
import {Search} from 'react-feather'

/**
* @author
* @function MoleculeSearchInputForm
**/

const MoleculeSearchInputForm = ({s3AuthConf}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <Box direction={'row'}>
        <MultiModalInput s3AuthConf={s3AuthConf}/>
    </Box> 
 )
}

export default MoleculeSearchInputForm