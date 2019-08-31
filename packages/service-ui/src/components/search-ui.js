/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

const SearchUI = (props) => (
    <div>
        <h3> Search </h3>
        <div sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <input sx={{
                p: 2,
            }}type='text' value='Enter Search Term'/>
            <p> or </p>
            <button sx={{
                p: 2,
                borderColor: 'gray.2'
            }}> Upload Video or Image </button>
        </div>
    </div>
)

export default SearchUI