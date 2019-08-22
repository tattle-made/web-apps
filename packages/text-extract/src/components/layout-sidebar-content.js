/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const LayoutSidebarContent = (props) => (
    <div
        sx={{
            flexWrap: 'wrap',
            display: 'flex',
            color: 'text'
        }}>
        <div
            sx={{
            p: 3,
            flexGrow: 1,
            flexBasis: 'sidebar',
            height: ['100%','50vh','50vh'],
            }}>
            {props.children[0]}
        </div>
        <div
            sx={{
            p: 3,
            flexGrow: 12,
            }}>
            {props.children[1]}
        </div>
    </div>
)

export default LayoutSidebarContent