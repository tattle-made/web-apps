/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import FooterLink from './footer-link'

const Footer = props =>
<div sx={{
    padding: 2
}}>
    <FooterLink url='#' label='BLOG'/> |
    <FooterLink url='#' label='MAILING LIST'/> |
    <FooterLink url='#' label='CONTACT'/>
</div>

export default Footer;