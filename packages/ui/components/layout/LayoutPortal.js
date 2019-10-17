import React, { useState, useEffect } from 'react'
import {Grommet, Box, Grid, Heading, Text, ResponsiveContext} from 'grommet'
import PropTypes from 'prop-types';
import TattleTheme from '../../theme'

/**
* @author
* @function LayoutPortal
    
**/

const columnsFactory = {
  'medium' : ['small', 'flex'],
  'small' : ['xxsmall', 'flex']
}


const LayoutPortal = ({content}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
  <Grommet theme={TattleTheme}>
    <ResponsiveContext.Consumer>
      {
        (size)=>(
          <Grid
            rows={['flex']}
            columns={columnsFactory[size]}
            gap="small"
            areas={[
                { name: 'nav', start: [0, 0], end: [0, 0] },
                { name: 'main', start: [1, 0], end: [1, 0] },
            ]}
          >
            <Box gridArea="nav" background="brand" > Posts <br/> User <br/> Tasks <br/> Search <Text>{size}</Text> </Box>
            <Box gridArea="main" > {content} </Box>
          </Grid>

        )
      }
    </ResponsiveContext.Consumer>
  </Grommet>
 )
}

LayoutPortal.propTypes = {
    header: PropTypes.func,
    sideNav: PropTypes.func,
    content: PropTypes.object,
    statusUpdate: PropTypes.func,
    overlay: PropTypes.func
}


export default LayoutPortal