/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';

const CenteredContainer = (props) => (
    <div sx={{
        backgroundColor: 'base',
        color: 'textDark'
    }}>
        <div
            sx={{
            maxWidth: 'container',
            px: 3,
            py: 4
            }}>
            {props.children}
        </div>
    </div>
)

export default CenteredContainer;