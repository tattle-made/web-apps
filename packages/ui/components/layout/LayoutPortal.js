import React, { useState, useEffect } from 'react'
import {Grommet, Box, Grid,} from 'grommet'
import PropTypes from 'prop-types';
import TattleTheme from '../../theme'

/**
* @author
* @function LayoutPortal
    
**/

const LayoutPortal = ({content}) => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
  <Grommet theme={TattleTheme}>
    <Grid
        rows={['xxsmall', 'full']}
        columns={['small', 'full']}
        gap="small"
        areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
    >
        <Box gridArea="header" background="brand" />
        <Box gridArea="nav" background="light-5" />
        <Box gridArea="main" > {content} </Box>
    </Grid>
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