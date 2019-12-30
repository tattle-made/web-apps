import React from 'react';
import {Grommet, Box} from 'grommet';
import { TattleTheme } from '../src';
import {Slack, Twitter, GitHub} from 'react-feather';
import SimpleHeader from '../src/components/atoms/Header/SimpleHeader';

export default {
  title: 'Header',
};



export const Simple = () => (
    <Grommet theme={TattleTheme}>
        <SimpleHeader/>
    </Grommet>
);
