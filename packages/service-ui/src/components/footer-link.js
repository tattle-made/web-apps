/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const FooterLink = props =>
<a href={props.url} sx={{
        fontSize: 1,
        textDecoration: 'none'
    }}> {props.label} 
</a>

export default FooterLink;