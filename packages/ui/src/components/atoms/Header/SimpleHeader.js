import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Button} from 'grommet';
import AppLogo from '../AppLogo';

/**
* @author
* @function SimpleHeader
**/

const SimpleHeader = () => (
    <Box direction={'row'} border wrap={'true'}>
        <AppLogo name={'Fact Check Search'}/>

        <Box margin={{left: 'large'}} pad={'small'} direction={'row'} align={'center'} gap={'medium'}>
            <Button plain={true}>
                <Heading margin={'none'} level={3}> Explore </Heading>
            </Button>
            <Button plain={true}>
                <Heading margin={'none'} level={3}> Search </Heading>
            </Button>
        </Box>
    </Box>
)

export default SimpleHeader