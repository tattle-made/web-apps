import React, { useState, useEffect } from 'react'
import {Grommet, Box, Heading, Text, Button} from 'grommet'
import AppShell from './components/AppShell';
import { Link } from './components/TattleLinks';


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
        <AppShell>
            <Heading level={1} margin={'none'}>
                Tattle Fact Check Search is a tool to find out if a media item has been fact checked before.
            </Heading>
            <Heading level={2} margin={'none'}>
                We scrape fact checking websites periodically and index them into our search engine. 
            </Heading>
            <Heading level={2} margin={'none'}>
                We’ve made this tool publically available for researchers and journalists to use.
            </Heading>

            <Box direction={'row'} gap={'small'} margin={{top:'large'}}>
                <Link to={'/fact-check-search/explore'}>
                    <Button label={'Explore dataset'} align={'center'} pad={'medium'} />
                </Link>
                <Link to={'/fact-check-search/search'}>
                    <Button label={'Search for media'} align={'center'} pad={'medium'} />
                </Link>
            </Box>
        </AppShell>

        
    )
}

export default FactCheckSearch