import React, { useState, useEffect } from 'react'
import { Grommet, ResponsiveContext, Box } from 'grommet'
import SimpleHeader from './SimpleHeader';
import SmallFooter from '../fact-check-search/components/SmallFooter';
import TattleTheme from './theme';


/**
* @author
* @function ContentPageLayout
**/

const AppShell = ({children, footerItems, headerLabel, headerTarget, primaryNav, expandCenter}) => (
    <Grommet theme={TattleTheme} full>
        <Box fill={'horizontal'} as={'header'}>
            <SimpleHeader 
                label={headerLabel}
                target={headerTarget}
                primaryNav={primaryNav}
            />
        </Box>
        {
            expandCenter == true ?
            <Box as={'main'} fill={'vertical'}>
                <ContentPageLayout>
                    {children}
                </ContentPageLayout>
            </Box>
            :
            <Box as={'main'} >
                <ContentPageLayout>
                    {children}
                </ContentPageLayout>
            </Box>
        }
        <Box fill={'horizontal'} as={'footer'}>
            <SmallFooter items={footerItems}/>
        </Box>
    </Grommet>
)

const ContentPageLayout = ({children}) => {
    const size = React.useContext(ResponsiveContext);
    console.log(size);
    return(
        size=='medium'|| size=='large'?
            <Box 
                width={'960px'} 
                pad={'small'}
                margin={{top:'large', bottom: 'large'}}
                alignSelf={'center'}
            >
                {children}
            </Box>
        :
            <Box 
                fill
                pad={'small'}
                margin={{top:'large', bottom: 'large'}}
            >
                {children}
            </Box>
    )
}

export default AppShell