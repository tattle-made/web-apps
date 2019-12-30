import React from 'react';
import {Grommet, Box, Heading, Text} from 'grommet';
import { TattleTheme } from '../src';
import {Slack, Twitter, GitHub} from 'react-feather';
import { SmallFooter } from '../src/components/atoms/Footer';

export default {
  title: 'Footer',
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



export const Small = () => (
    <Grommet theme={TattleTheme}>
        <SmallFooter items={FooterItems}/>
    </Grommet>
);
