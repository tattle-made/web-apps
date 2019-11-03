import React, { useState, useEffect } from 'react'
import {Box, Text} from 'grommet';

/**
* @author
* @function BreadCrumb
**/

const BreadCrumb = ({path}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

  return (
    <Box direction="row" margin={{vertical:"small"}}>
      {/* {fetching && <h3>something</h3>} */}
      {
          path.map((item,index)=>(            
            <Box direction="row">
                {index!=0 && <Text>&nbsp;</Text>}
                <Text>{item}</Text>
                {index!=path.length-1 && <Text> &nbsp; > </Text>}
            </Box>
          ))
      }
    </Box>
  )
}

BreadCrumb.defaultProps = {
    path : ["search", "settings"]
}

export default BreadCrumb