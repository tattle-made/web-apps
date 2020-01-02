import React, { useState, useEffect } from 'react'
import {Heading} from 'grommet'
import AppShell from '../../components/fact-check-search/components/AppShell';

/**
* @author
* @function Search
**/

const Status = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <AppShell>
            <Heading level={1} margin={'none'}>
                Status
            </Heading>
        </AppShell>
    )
}

export default Status