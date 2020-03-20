import React, { useState, useEffect } from 'react'
import {Heading} from 'grommet'
import AppShell from '../../components/atomic/AppShell';
import { footerItems, primaryNav } from '../../config/options';

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
        <AppShell
            headerLabel={'Khoj'}
            headerTarget={'/khoj'}
            footerItems={footerItems}
            primaryNav={primaryNav}
            expandCenter={false}
        >
            <Heading level={1} margin={'none'}>
                Status
            </Heading>
        </AppShell>
    )
}

export default Status