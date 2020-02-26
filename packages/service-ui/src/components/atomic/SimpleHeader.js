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

const SimpleHeader = ({label, options}) => (
    <Box direction={'row'} border wrap={true}>
        <AppLogo name={label}/>

        <Box margin={{left: 'large'}} pad={'small'} direction={'row'} align={'center'} gap={'medium'}>
            {
                options.map((option) => {
                    <ThemedLink to={option.target} > 
                        <Button plain={true}>
                            <Heading margin={'none'} level={3}> {option.label} hi </Heading>
                        </Button>
                    </ThemedLink>
                })
            }
        </Box>
    </Box>
)

export default SimpleHeader