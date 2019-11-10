import React from 'react';
import { actions } from '@storybook/addon-actions';
import { MultipleLinks } from '../src/components/atoms/ExternalLink';
import { Grommet } from 'grommet';
import TattleTheme from '../src/theme';

export default {
  title: 'External Urls',
};

const moleculeUrlDefaultData = {
    status: 'default',
}

export const moleculeUrlDefaultBlock = () => (
    <Grommet theme={TattleTheme}>
        <MultipleLinks
            title={'Molecule URLs'}
            data={ moleculeUrlDefaultData }
        />
    </Grommet>
)

const moleculeUrlLoadingData = {
    status: 'loading',
}

export const moleculeUrlLoadingBlock = () => (
    <Grommet theme={TattleTheme}>
        <MultipleLinks
            title={'Molecule URLs'}
            data={ moleculeUrlLoadingData }
        />
    </Grommet>
)

const moleculeUrlErrorData = {
    status: 'error',
    message : 'Error fetching URLs'
}

export const moleculeUrlErrorBlock = () => (
    <Grommet theme={TattleTheme}>
        <MultipleLinks
            title={'Molecule URLs'}
            data={ moleculeUrlErrorData }
        />
    </Grommet>
)

const moleculeUrlData = {
    status: 'data',
    urls : [
		{
			title: 'Sample Title of First Url',
			url : 'https://www.altnews.in/authors-wikipedia-page-vandalised-after-times-critical-cover-story-on-pm-modi/',
			timestamp: "10th May 2019"
		},
		{
			title: 'Sample Title of Second Url',
			url : 'https://www.boomlive.in/amidst-shutdown-rumours-lakshmi-vilas-bank-files-police-complaint/',
			timestamp: "9th May 2019"
		},
		{
			title: 'Sample Title of Third Url',
			url : 'https://www.altnews.in/authors-wikipedia-page-vandalised-after-times-critical-cover-story-on-pm-modi/',
			timestamp: "19th March 2018"
		}
	]
}

export const moleculeUrlBlock = () => (
    <Grommet theme={TattleTheme}>
        <MultipleLinks
            title={'Molecule URLs'}
            data={ moleculeUrlData }
        />
    </Grommet>
)
