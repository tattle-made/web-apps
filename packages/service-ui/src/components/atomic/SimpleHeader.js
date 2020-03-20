import React from 'react'
import { Box, Heading, Text, Button} from 'grommet';
import AppLogo from './AppLogo';
import {Link} from 'gatsby'
import styled from 'styled-components';
import { primaryNav } from '../../config/options';
import {Home} from 'react-feather'

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

const SimpleHeader = ({label, target, primaryNav}) => (
    <Box direction={'row'} wrap={true}>
        <AppLogo 
            name={label}
            target={target}
        />

        <Box margin={{left: 'large'}} pad={'small'} direction={'row'} align={'center'} gap={'medium'}>
            {   
                primaryNav.options.map((option) => (
                    <ThemedLink key={option.id} to={option.target} > 
                        <Button plain={true}>
                            <Heading margin={'none'} level={3}> {option.label} </Heading>
                        </Button>
                    </ThemedLink>
                ))
            }

        </Box>
    </Box>
)

export default SimpleHeader