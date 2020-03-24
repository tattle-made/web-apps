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
            headerLabel={'Khoj'}
            headerTarget={'/khoj'}
            footerItems={footerItems}
            primaryNav={primaryNav}
            expandCenter={true}
        >
            <Heading level={1}>
                Tattle Khoj tells you if an image has appeared in a fact-checking article.
            </Heading>
            <Heading level={3}>
                We periodically scrape articles from IFCN certified fact-checking sites and maintain them in a searchable database.
            </Heading> 

            <Box direction={'row'} gap={'small'} margin={{top:'large'}} flex={false}>
                <Link to={'/khoj/explore'}>
                    <Button label={'Explore dataset'} align={'center'} pad={'medium'} />
                </Link>
                <Link to={'/khoj/search'}>
                    <Button primary label={'Search for media'} align={'center'} pad={'medium'} />
                </Link>
            </Box>
        </AppShell>

        
    )
}

export default FactCheckSearch