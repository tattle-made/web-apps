/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import ServiceUI from '../components/text-extract-ui'
import AppShell from '../components/atomic/AppShell';
import {Box, Heading} from 'grommet';

const footerItems = {
  primary : [
      { id : 1, label : 'Tattle', target: 'http://tattle.co.in', type:'external'},
      { id : 2, label : 'Blog', target: 'http://blog.tattle.co.in', type:'external'},
      { id : 3, label : 'Mailing List', target: 'https://mailchi.mp/b0a851c89c0d/tattle_update', type:'internal'},
  ],
}


const primaryNav = {
  options : [
  
  ]
}

const TextExtractPage = () => (
  <AppShell
    headerLabel={'Text Extractor'}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={true}
  >
    <Heading level={3}>
      Extract text from memes
    </Heading>
    <ServiceUI/>
  </AppShell>
)

export default TextExtractPage
