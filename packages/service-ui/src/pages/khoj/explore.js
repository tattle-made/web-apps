import React, { useState, useEffect } from 'react'
import { Grid, Box, Heading, Text} from 'grommet'
import AppShell from '../../components/atomic/AppShell';
import styled from 'styled-components'
import DataFeed from '../../components/fact-check-search/components/DataFeed';
import { footerItems, primaryNav } from '../../config/options';
import { ExternalLink } from '../../components/atomic/TattleLinks';

const DataVizOverview = styled.div`
  text-align: center;
  h1{
    font-size: '22px';
  }
  h2 {
    font-size: '18px';
    display: inline;
    font-weight: '200';
  }
  p{
    font-size: '12px';
    font-weight: '300';
  }
`

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
  <AppShell
    headerLabel={'Khoj'}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={false}
  >
    {/* <Box width={'horizontal'} height={'350px'} border>
    </Box> */}
    <Box direction={'column'} gap={'medium'} flex={false}>
      <Box direction={'row'} gap={'small'} margin={{top:'medium'}}>
        <Box width={'50%'} border pad={'medium'} flex={false} >
          <DataVizOverview>
            <h1> 25K articles </h1>
            <Grid
              columns={{
                count:3,
                size: 'auto'
              }}
              gap={'small'}
            >
              <Box> <p> texts </p> </Box>
              <Box> <p> images </p> </Box>
              <Box> <p> videos </p> </Box>
            </Grid>
          
            <Grid
                columns={{
                  count:3,
                  size: 'auto'
                }}
                gap={'small'}
              >
              <Box> <h2> 40K </h2> </Box>
              <Box> <h2> 32K </h2> </Box>
              <Box> <h2> 18K </h2> </Box>
            </Grid>
          </DataVizOverview>
        </Box>
        <Box width={'50%'}>
        
        </Box>
      </Box>
      <DataFeed />
    </Box>  
  
  </AppShell>
)
}

export default Explore