import React from 'react'
import { ResponsiveContext, Box, Heading, Text } from 'grommet'
import { Link, PlainLink } from './TattleLinks'
import { Home } from 'react-feather'

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

const AppLogo = ({name, target}) => {
    return (
        <ResponsiveContext.Consumer>
        {(size) => (
            <Box pad={'small'} direction={'row'} align={'center'} gap={'small'}>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                <PlainLink to={target}>
                    { <Heading level={4} margin={'none'}> {name} </Heading>}
                </PlainLink>
            </Box>
        )}
        </ResponsiveContext.Consumer>
    )
}

export default AppLogo