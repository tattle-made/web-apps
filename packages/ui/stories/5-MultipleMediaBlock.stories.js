import React from 'react';
import MoleculeMultiplePosts from '../src/components/molecules/MoleculeMultiplePosts';

import {Grommet} from 'grommet'
import TattleTheme from '../src/theme';


export default {
  title: 'Multiple Media Block',
};

const multipleMediaBlockDefaultData = {
    status:'default'
}

export const MultipleMediaBlockDefault = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeMultiplePosts
            title={'Multiple Media Block'}
            data={multipleMediaBlockDefaultData}
        />
    </Grommet>
)

//
const multipleMediaBlockLoadingData = {
    status:'loading'
}

export const MultipleMediaBlockLoading = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeMultiplePosts
            title={'Multiple Media Block'}
            data={multipleMediaBlockLoadingData}
        />
    </Grommet>
)

//
const multipleMediaBlockData = {
    status:'data',
    posts: [
        {
            "id": 258,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 260,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        }
    ]
}

export const MultipleMediaBlockData = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeMultiplePosts
            title={'Multiple Media Block'}
            data={ multipleMediaBlockData }
        />
    </Grommet>
)

const multipleMediaBlockError = {
    status:'error',
    message: 'Error fetching data'
}

export const MultipleMediaBlockError = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeMultiplePosts
            title={'Multiple Media Block'}
            data={ multipleMediaBlockError }
        />
    </Grommet>
)