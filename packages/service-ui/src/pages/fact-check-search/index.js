import React, { useState, useEffect } from 'react'
import {Grommet, Box, Heading, Text, Button} from 'grommet'
import AppShell from '../../components/atomic/AppShell';
import { Link } from '../../components/atomic/TattleLinks';
import { footerItems, primaryNav } from '../../config/options';
  


/**
* @author
* @function FactCheckSearch
**/

const FactCheckSearch = () => {
    const [fetching, setFetching] = useState(false)
    console.log(primaryNav);

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <AppShell 
            headerLabel={'Factcheck Search'}
            footerItems={footerItems}
            primaryNav={primaryNav}
            expandCenter={true}
        >
            <Heading level={1}>
                Tattle Fact Check Search is a tool to find out if a media item has been fact checked before.
            </Heading>
            <Heading level={3}>
                We scrape fact checking websites periodically and index them into our search engine. 
            </Heading>
            <Heading level={3}>
                We’ve made this tool publically available for researchers and journalists to use.
            </Heading>

            <Box direction={'row'} gap={'small'} margin={{top:'large'}}>
                <Link to={'/fact-check-search/explore'}>
                    <Button label={'Explore dataset'} align={'center'} pad={'medium'} />
                </Link>
                <Link to={'/fact-check-search/search'}>
                    <Button primary label={'Search for media'} align={'center'} pad={'medium'} />
                </Link>
            </Box>
        </AppShell>

        
    )
}

export default FactCheckSearch