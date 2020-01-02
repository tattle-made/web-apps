import React, { useState, useEffect } from 'react'
import {Heading} from 'grommet'
import AppShell from './components/AppShell';

/**
* @author
* @function Search
**/

const Search = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <AppShell>
            <Heading level={1} margin={'none'}>
                Search
            </Heading>
        </AppShell>
    )
}

export default Search