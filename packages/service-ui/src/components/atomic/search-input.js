/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import PropTypes from 'prop-types';
import {keyframes} from 'emotion'
import {useSelector} from 'react-redux'

const SearchInput = (props) => {
    return(
        <div sx={{
            display: 'flex',
            alignItems:'center',
            backgroundColor: 'primary',
        }}>
            <h1 sx={{
                marginRight : 4
            }}> Search </h1>
            <input type='text'/> 
            <button> Go </button>
        </div>
    )
}

SearchInput.propTypes = {
    onSearchPressed: PropTypes.func,
    state: PropTypes.oneOf(['loading'])
}

export default SearchInput;