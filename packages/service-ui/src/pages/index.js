/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { basename } from 'path';
import {Link} from 'gatsby'
import {Box, Heading} from 'grommet'

import ServiceUI from '../components/text-extract-ui'
import AppShell from '../components/atomic/AppShell'

const footerItems = {
  primary : [
      { id : 1, label : 'Tattle', target: 'http://tattle.co.in', type:'external'},
      { id : 2, label : 'Blog', target: 'http://blog.tattle.co.in', type:'external'},
      { id : 4, label : 'Contribute', target: '/contribute', type:'internal'},
  ],
}

const IndexPage = () => (
  <AppShell
    headerLabel={'Tattle Services'}
    footerItems={footerItems}
  >
    <Heading level={1}>
        Index
    </Heading>
    <Heading level={3}>
     We open up our technology to be used by general public. Here's an updated list of publically available tools
    </Heading>
    <Box direction={'column'} gap={'small'}>
      <Link to="text-extract"> Text Extract </Link>
      <Link to="fact-check-search"> Fact Check Search </Link>
    </Box>
  </AppShell>
)

export default IndexPage
