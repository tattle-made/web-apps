import React from 'react'
import { ResponsiveContext, Box, Heading } from 'grommet'
import { Link } from './TattleLinks'

const Logo = () => (
    <Box
        height="32px"
        width="32px"
        round="full"
        background="url(//tattle-media.s3.amazonaws.com/monogram-dark.svg)"
    />
)

/**
* @author denny
* @function Logo
**/

const AppLogo = ({name}) => {
    return (
        <ResponsiveContext.Consumer>
        {(size) => (
            <Box pad={'small'} direction={'row'} align={'center'} gap={'small'}>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                { <Heading level={4} margin={'none'}> {name} </Heading>}
            </Box>
        )}
        </ResponsiveContext.Consumer>
    )
}

export default AppLogo