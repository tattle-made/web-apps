import React, { useState, useEffect } from 'react'
import {Grommet, Box, Heading, Text, Button} from 'grommet'
import AppShell from '../../components/atomic/AppShell';
import { Link } from '../../components/atomic/TattleLinks';

const footerItems = {
    primary : [
        { id : 1, label : 'Tattle', target: 'http://tattle.co.in', type:'external'},
        { id : 2, label : 'Blog', target: 'http://blog.tattle.co.in', type:'external'},
        { id : 3, label : 'Status', target: '/status', type:'internal'},
        { id : 4, label : 'Contribute', target: '/contribute', type:'internal'},
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
        <AppShell 
            headerLabel={'Factcheck Search'}
            footerItems={footerItems}>
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
                    <Button label={'Search for media'} align={'center'} pad={'medium'} />
                </Link>
            </Box>
        </AppShell>

        
    )
}

export default FactCheckSearch