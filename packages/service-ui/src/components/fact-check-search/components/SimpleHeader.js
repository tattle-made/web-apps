import React from 'react'
import { Box, Heading, Text, Button} from 'grommet';
import AppLogo from './AppLogo';
import {Link} from 'gatsby'
import styled from 'styled-components';

const ThemedLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :visited {
        color: inherit;
    }
`

/**
* @author
* @function SimpleHeader
**/

const SimpleHeader = () => (
    <Box direction={'row'} border wrap={true}>
        <AppLogo name={'Fact Check Search'}/>

        <Box margin={{left: 'large'}} pad={'small'} direction={'row'} align={'center'} gap={'medium'}>
            <ThemedLink to={'/fact-check-search/explore'} > 
                <Button plain={true}>
                    <Heading margin={'none'} level={3}> Explore </Heading>
                </Button>
            </ThemedLink>
            
            <ThemedLink to={'/fact-check-search/search'} > 
                <Button plain={true}>
                    <Heading margin={'none'} level={3}> Search </Heading>
                </Button>
            </ThemedLink>

        </Box>
    </Box>
)

export default SimpleHeader