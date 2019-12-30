import React from 'react';
import { Status } from '../src/components/atoms';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Status',
  };

export const loading = () => (
    <Status 
        type='loading'
        message= 'Loading resources'
    />
)

export const message = () => (
    <Status 
        type='message'
        message= 'Data submitted'
    />
)

export const error = () => (
    <Status 
        type='error'
        message= 'Unable to connect to network'
    />
)