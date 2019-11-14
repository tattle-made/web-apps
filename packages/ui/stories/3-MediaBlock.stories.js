import React from 'react';
import { action } from '@storybook/addon-actions';
import { SinglePost } from '../src/components/atoms/MediaBlock';
import MoleculeSinglePost from '../src/components/molecules/MoleculeSinglePost';
import {Grommet} from 'grommet'
import TattleTheme from '../src/theme';

export default {
    title: 'Media Block',
};


export const componentSinglePost = () => (
    <Grommet theme={TattleTheme}>
        <SinglePost
            type='image'
            src='https://tattle-media.s3.amazonaws.com/post_image_1.jpeg'
        />
    </Grommet>
)

const sectionDataDefault={
    status: 'default',
}

export const moleculeSinglePostDefault  = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeSinglePost
            visible={true}
            title={'Molecule Single Post'}
            data={sectionDataDefault}
        />
    </Grommet>
)

const sectionDataLoading={
    status: 'loading',
}

export const moleculeSinglePostLoading  = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeSinglePost
            visible={true}
            title={'Molecule Single Post'}
            data={sectionDataLoading}
        />
    </Grommet>
)

const sectionDataData = {
    status: 'data',
    type: 'image',
    mediaUrl: 'https://tattle-media.s3.amazonaws.com/post_image_1.jpeg',
    heading: 'Flower blooming',
    body: 'lorem ipsum kyasd sdeca',
    timestamp: '2019-11-13T07:49:45.000Z'
}

export const moleculeSinglePostData  = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeSinglePost
            visible={true}
            title={'Molecule Single Post'}
            data={sectionDataData}
        />
    </Grommet>
)

const sectionDataError = {
    status: 'error',
    message: 'Error Finding Data'
}

export const moleculeSinglePostError  = () => (
    <Grommet theme={TattleTheme}>
        <MoleculeSinglePost
            visible={true}
            title={'Molecule Single Post'}
            data={sectionDataError}
        />
    </Grommet>
)
