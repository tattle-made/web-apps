import React from 'react';
import { action } from '@storybook/addon-actions';
import { Grommet } from 'grommet'
import TattleTheme from '../src/theme';

import { Atoms } from '../src';
const { AppLogo } = Atoms;


export default {
  title: 'App Logo',
};

export const responsiveLogo = () => (
    <Grommet theme={TattleTheme}>
        <AppLogo />
    </Grommet>
);
