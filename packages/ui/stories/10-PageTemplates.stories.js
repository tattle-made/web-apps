import React from 'react';
import {Grommet, Box, Grid, Heading, Text, Button, ResponsiveContext} from 'grommet';
import { TattleTheme } from '../src';
import {Slack, Twitter, GitHub} from 'react-feather';
import SimpleHeader from '../src/components/atoms/Header/SimpleHeader';
import { SmallFooter } from '../src/components/atoms/Footer';
import { ToastHeader } from 'react-bootstrap';

export default {
  title: 'Page Templates',
};

const FooterItems = {
    primary : [
        { label : 'Tattle', target: '/tattle'},
        { label : 'Contribute', target: '/tattle'},
        { label : 'Blog', target: '/tattle'},
        { label : 'Contact', target: '/tattle'},
        { label : 'Status', target: '/tattle'},
    ],
}

const ContentGrid = ({children}) => {
    const size = React.useContext(ResponsiveContext);
    console.log(size);
    return(
        size=='medium'|| size=='large'?
            <Box 
                width={'960px'} 
                pad={'small'}
                margin={{top:'medium'}}
                alignSelf={'center'}
            >
                {children}
            </Box>
        :
            <Box 
                full
                pad={'small'}
                margin={{top:'medium'}}
            >
                {children}
            </Box>
    )
}


export const LandingPage = () => (
    <Grommet theme={TattleTheme} full>
        <Box fill={'horizontal'} as={'header'}>
            <SimpleHeader/>
        </Box>
        <Box fill={'vertical'} as={'main'}>
            <ContentGrid>
                <Heading level={1} margin={'none'}>
                    Tattle Fact Check Search is a tool to find out if a media item has been fact checked before.
                </Heading>
                <Heading level={2} margin={'none'}>
                    We scrape fact checking websites periodically and index them into our search engine. 
                </Heading>
                <Heading level={2} margin={'none'}>
                    We’ve made this tool publically available for researchers and journalists to use.
                </Heading>

                <Box direction={'row'} gap={'small'} margin={{top:'large'}}>
                    <Button label={'Explore dataset'} align={'center'} pad={'medium'} />
                    <Button label={'Search for media'} align={'center'} pad={'medium'} />
                </Box>
            </ContentGrid>
        </Box>

        <Box fill={'horizontal'} as={'footer'}>
            <SmallFooter items={FooterItems}/>
        </Box>

    </Grommet>
);
