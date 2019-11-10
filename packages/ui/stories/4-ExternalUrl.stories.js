import React from 'react';
import { actions } from '@storybook/addon-actions';
import { MultipleLinks } from '../src/components/atoms/ExternalLink';

export default {
  title: 'External Urls',
};

const moleculeUrlDefaultData = {
    status: 'default',
}

export const moleculeUrlDefaultBlock = () => (
    <MultipleLinks
        title={'Molecule URLs'}
        data={ moleculeUrlDefaultData }
    />
)

const moleculeUrlLoadingData = {
    status: 'loading',
}

export const moleculeUrlLoadingBlock = () => (
    <MultipleLinks
        title={'Molecule URLs'}
        data={ moleculeUrlLoadingData }
    />
)

const moleculeUrlErrorData = {
    status: 'error',
    message : 'Error fetching URLs'
}

export const moleculeUrlErrorBlock = () => (
    <MultipleLinks
        title={'Molecule URLs'}
        data={ moleculeUrlErrorData }
    />
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
    <MultipleLinks
        title={'Molecule URLs'}
        data={ moleculeUrlData }
    />
)
