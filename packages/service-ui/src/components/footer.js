/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import FooterLink from './footer-link'
import { Box, Text} from 'grommet'

import {version} from '../../package.json';

const Footer = props =>
<div sx={{
    padding: 2
}}>
    <Box direction={'row'} gap={'xsmall'}>
        <FooterLink url='http://blog.tattle.co.in/' label='BLOG'/> |
        <FooterLink url='https://mailchi.mp/b0a851c89c0d/tattle_update' label='MAILING LIST'/> |
        <FooterLink url='mailto:manage@tattle.co.in' label='CONTACT'/>
    </Box>

    
    <Text size={'small'} color={'gray'}> version : {version} </Text>
</div>

export default Footer;