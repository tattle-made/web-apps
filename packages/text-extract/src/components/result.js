/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Result = ({message}) => (
    <div>
        <h3> Extracted Text </h3>
        <p> {message} </p>
    </div>
)

export default Result;