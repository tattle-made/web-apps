/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Feedback = () => (
    <div sx={{
        display:'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap'
    }}>
        <div sx={{marginRight:4}}><h3> Did we get it right? </h3></div>
        <div>
            <button sx={{variant: 'buttons.neutral'}}> Yes </button>
            <button sx={{variant: 'buttons.neutral'}}> No </button>
        </div>
    </div>
)

export default Feedback;