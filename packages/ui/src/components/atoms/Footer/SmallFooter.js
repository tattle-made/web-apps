import React, { useState, useEffect } from 'react'
import { Box, Text } from 'grommet'
import { Slack, GitHub, Twitter } from 'react-feather';

/**
* @author
* @function SmallFooter
**/

const SmallFooter = ({items}) => (
        <Box direction={'row'} border wrap={'true'}>
            <Box direction={'row'} pad={'small'} gap={'small'} wrap={'true'}>
                {
                    items.primary.map((primaryItem) => (
                        <Text> {primaryItem.label} </Text>
                    ))
                }
            </Box>

            <Box flex={'grow'}>
                
            </Box>

            <Box direction={'row'} pad={'small'} gap={'small'} align={'center'}>
                <Slack size={16}/>
                <GitHub size={16}/>
                <Twitter size={16}/>
            </Box>
        </Box>
)
export default SmallFooter