import React, { useState, useEffect } from 'react'
import { Grommet, ResponsiveContext, Box } from 'grommet'
import SimpleHeader from './SimpleHeader';
import SmallFooter from './SmallFooter';
import TattleTheme from './theme';

const FooterItems = {
    primary : [
        { id : 1, label : 'Tattle', target: 'http://tattle.co.in', type:'external'},
        { id : 2, label : 'Blog', target: 'http://blog.tattle.co.in', type:'external'},
        { id : 3, label : 'Status', target: '/status', type:'internal'},
        { id : 4, label : 'Contribute', target: '/contribute', type:'internal'},
    ],
}

/**
* @author
* @function ContentPageLayout
**/

const AppShell = ({children}) => (
    <Grommet theme={TattleTheme} full>
        <Box fill={'horizontal'} as={'header'}>
            <SimpleHeader/>
        </Box>
        <Box as={'main'} >
            <ContentPageLayout>
                {children}
            </ContentPageLayout>
        </Box>
    <Box fill={'horizontal'} as={'footer'}>
        <SmallFooter items={FooterItems}/>
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