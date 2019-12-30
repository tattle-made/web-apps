import React from 'react';
import { action } from '@storybook/addon-actions';
import MoleculeSearchInputForm from '../src/components/molecules/MoleculeSearchInputForm';
import { MultiModalInput } from '../src/components/atoms';
import { Grommet } from 'grommet'
import TattleTheme from '../src/theme';


export default {
  title: 'Multi Modal Input',
};

export const text = () => (
    <Grommet theme={TattleTheme}>
        <MultiModalInput 
            onSubmit={(e)=>console.log('hi', JSON.stringify(e))}
            s3AuthConf={
                {
                    url: 'http://localhost:3003/api/s3-auth',
                    token: '0f4fe090-0643-11ea-bc52-1387edf2f78a'
                }
            }
        />
    </Grommet>
);
