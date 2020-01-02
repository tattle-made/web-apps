import React, { useState, useEffect } from 'react'
import {Grommet, Box} from 'grommet'

const FooterItems = {
    primary : [
        { label : 'Tattle', target: '/tattle'},
        { label : 'Contribute', target: '/tattle'},
        { label : 'Blog', target: '/tattle'},
        { label : 'Contact', target: '/tattle'},
        { label : 'Status', target: '/tattle'},
    ],
}

/**
* @author
* @function FactCheckSearch
**/

const FactCheckSearch = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <Grommet full>
            <Box fill={'horizontal'} background={'brand'}>
                Test
            </Box>
        </Grommet>
    )
}

export default FactCheckSearch