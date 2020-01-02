import React from 'react'
import { Box, Text } from 'grommet'
import { Slack, GitHub, Twitter } from 'react-feather';
import {Link} from 'gatsby'
import styled from 'styled-components';

const ThemedLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :visited {
        color: inherit;
    }
`

const ThemedExternalLink = styled.a`
    text-decoration: none;
    color: inherit;
    :visited {
        color: inherit;
    }
`

/**
* @author
* @function SmallFooter widget
**/

const SmallFooter = ({items}) => (
        <Box direction={'row'} border wrap={'true'}>
            <Box direction={'row'} pad={'small'} gap={'small'} wrap={'true'}>
                {
                    items.primary.map((primaryItem) => (
                        <ThemedLink to={`/fact-check-search/${primaryItem.target}`}>
                            <Text> {primaryItem.label} </Text>
                        </ThemedLink>
                    ))
                }
            </Box>

            <Box flex={'grow'}>
                
            </Box>

            <Box direction={'row'} pad={'small'} gap={'small'} align={'center'}>
                <ThemedExternalLink 
                    href={'https://tarunima.typeform.com/to/BxZjfv'} target={'_blank'}>
                    <Slack size={16}/> 
                </ThemedExternalLink>
                <ThemedExternalLink 
                    href={'https://github.com/tattle-made'} target={'_blank'}>
                    <GitHub size={16}/>
                </ThemedExternalLink>
                <ThemedExternalLink 
                    href={'https://twitter.com/tattlemade'} target={'_blank'}>
                    <Twitter size={16}/>
                </ThemedExternalLink>
            </Box>
        </Box>
)
export default SmallFooter