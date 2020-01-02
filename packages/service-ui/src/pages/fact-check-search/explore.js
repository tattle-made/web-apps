import React, { useState, useEffect } from 'react'
import {Heading} from 'grommet'
import AppShell from './components/AppShell';

/**
* @author
* @function Explore
**/

const Explore = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

return (
  <AppShell>
    <Heading level={1} margin={'none'}>
        Explore
    </Heading>
  </AppShell>
)
}

export default Explore