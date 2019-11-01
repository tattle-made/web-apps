import React, { useState, useEffect } from 'react'
import {Box, Text} from 'grommet';

/**
* @author
* @function SectionNavigation
**/

const SectionNavigation = ({links}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

return (
<Box direction="row" margin={{vertical:"small"}}>
    {/* {fetching && <h3>something</h3>} */}
    {
        links.map((item,index)=>(            
            <Box direction="row">
                {index!=0 && <Text>&nbsp;</Text>}
                <Text>{item}</Text>
                {index!=links.length-1 && <Text> &nbsp; | </Text>}
            </Box>
        ))
    }
</Box>
)
}

SectionNavigation.defaultProps = {
    links : ["help", "api doc"]
}

export default SectionNavigation