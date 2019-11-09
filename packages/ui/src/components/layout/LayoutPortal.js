import React from 'react'
import {Grommet, ResponsiveContext, Box, Stack, Grid, Heading, Text} from 'grommet'
import TattleTheme from '../../theme'

const PortalLayoutDesktop = ({primaryNavigationContent, mainSectionContent, children}) => {
  return(
      <Grid
          rows={['flex']}
          columns={['auto', 'flex']}
          areas={[
              {name: 'PrimaryNavigationSection', start:[0,0], end:[0,0]},
              {name: 'MainSection', start:[1,0], end:[1,0]}
          ]}
          gap={'small'}
          fill
      >
      <Box fill background={'brand-1'} gridArea={'PrimaryNavigationSection'}>
          {primaryNavigationContent}
      </Box>
      <Box fill background={'light-2'} gridArea={'MainSection'}>
          {mainSectionContent}
      </Box>
      </Grid>
  )   
}

const PortalLayoutMobile = ({primaryNavigationContent, mainSectionContent, children}) => {
  return(
      <Grid
          rows={['flex']}
          columns={['xsmall', 'flex']}
          areas={[
              {name: 'PrimaryNavigationSection', start:[0,0], end:[0,0]},
              {name: 'MainSection', start:[1,0], end:[1,0]}
          ]}
          gap={'small'}
          fill
      >
      <Box fill background={'brand-1'} gridArea={'PrimaryNavigationSection'}>
          {primaryNavigationContent}
      </Box>
      <Box fill background={'light-2'} gridArea={'MainSection'}>
          {mainSectionContent}
      </Box>
      </Grid>
  )   
}

const LayoutPortal = ({primaryNavigationContent, mainSectionContent}) => {
    return(
        <ResponsiveContext.Consumer>
            {size => (
                size == 'small' ?
                <PortalLayoutMobile
                    primaryNavigationContent={primaryNavigationContent}
                    mainSectionContent={mainSectionContent}
                >  
                </PortalLayoutMobile>
                :
                size == 'medium' ?
                <PortalLayoutDesktop
                    primaryNavigationContent={primaryNavigationContent}
                    mainSectionContent={mainSectionContent}
                >  
                </PortalLayoutDesktop>
                :
                <Heading> Layout for this size is not defined </Heading>
            )}
        </ResponsiveContext.Consumer>
    )   
}

export default LayoutPortal