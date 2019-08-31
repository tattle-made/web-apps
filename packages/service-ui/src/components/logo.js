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
            marginLeft: 2,
            color:'blue.8'
        }}> Tattle </h3>
    </div>

export default Logo