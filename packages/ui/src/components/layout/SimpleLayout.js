import React from 'react'
import {Grommet, Box, Grid, Heading, Text, ResponsiveContext} from 'grommet'
import TattleTheme from '../../theme'

/**
* @author
* @function SimpleLayout
**/

const SimpleLayout = ({children}) => {
    return (
        <Grommet theme={TattleTheme}>
            <Box 
                fill
                pad={'medium'}
            >
                    {children}
            </Box>
        </Grommet>
    )
}

export default SimpleLayout