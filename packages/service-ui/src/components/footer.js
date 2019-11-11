/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import FooterLink from './footer-link'

const Footer = props =>
<div sx={{
    padding: 2
}}>
    <FooterLink url='http://blog.tattle.co.in/' label='BLOG'/> |
    <FooterLink url='https://mailchi.mp/b0a851c89c0d/tattle_update' label='MAILING LIST'/> |
    <FooterLink url='mailto:manage@tattle.co.in' label='CONTACT'/>
</div>

export default Footer;