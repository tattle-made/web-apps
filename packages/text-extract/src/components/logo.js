/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import logo from '../assets/logo.svg'

const Logo = props => 
    <div sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <img src={logo} alt='Tattle Logo'/>
        <h3 sx={{
            marginLeft: 1,
            marginTop: 1,
            color:'#0065B2'
        }}> Tattle </h3>
    </div>

export default Logo