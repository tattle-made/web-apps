/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from "gatsby"

const CTA = (props) => 
    <Link
        to='/learn'
        activeClassName='active'
        sx={{
            // backgroundColor: 'background',
            // padding: 2,
            borderRadius: '0.2em',
            color: 'textDark',
            // textDecoration: 'none'
            '&.hover': {
                backgroundColor: 'aqua'
            }
        }}
        >
        learn more
    </Link>

export default CTA