import React from 'react';
import { action } from '@storybook/addon-actions';
import { Grommet, Box } from 'grommet'
import TattleTheme from '../src/theme';

import { Atoms } from '../src';
const { AppLogo } = Atoms;


export default {
  title: 'App Logo',
};

export const responsiveLogo = () => (
    <Grommet theme={TattleTheme}>
      <Box gap={'medium'}>
        <AppLogo name={'Tattle'} />
        <AppLogo name={'Archive'} />
        <AppLogo name={'Blog'} />
      </Box>
    </Grommet>
);
