/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import PropTypes from 'prop-types';
import {keyframes} from 'emotion'
import {useSelector} from 'react-redux'

const SearchInput = (props) => {
    return(
        <div>
            <h4> Search in dataset </h4>
            <div sx={{
                display: 'flex',
                alignItems: 'center',
                m:1
            }}>
                <input sx={{
                    p: 2,
                }}type='text' value='Enter Search'/>
                <p sx={{
                    m:2
                }}> or </p>
                <button sx={{
                    p: 2,
                    borderColor: 'gray.2'
                }}> Upload Video or Image </button>
            </div>
        </div>
    )
}

SearchInput.propTypes = {
    onSearchPressed: PropTypes.func,
    state: PropTypes.oneOf(['loading'])
}

export default SearchInput;