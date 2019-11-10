import React from 'react';
import { action } from '@storybook/addon-actions';
import { SinglePost } from '../src/components/atoms/MediaBlock';
import MoleculeSinglePost from '../src/components/molecules/MoleculeSinglePost';

export default {
    title: 'Media Block',
};


export const singlePost = () => (
    <SinglePost
        type='image'
        src='https://tattle-media.s3.amazonaws.com/post_image_1.jpeg'
    />
)

const sectionDataLoading={
    status: 'loading',
}

export const moleculeSinglePostLoading  = () => (
    <MoleculeSinglePost
        visible={true}
        title={'Molecule Single Post'}
        data={sectionDataLoading}
    />
)

const sectionDataData = {
    status: 'data',
    type: 'image',
    mediaUrl: 'https://tattle-media.s3.amazonaws.com/post_image_1.jpeg'
}

export const moleculeSinglePostData  = () => (
    <MoleculeSinglePost
        visible={true}
        title={'Molecule Single Post'}
        data={sectionDataData}
    />
)

const sectionDataError = {
    status: 'error',
    message: 'Error Finding Data'
}

export const moleculeSinglePostError  = () => (
    <MoleculeSinglePost
        visible={true}
        title={'Molecule Single Post'}
        data={sectionDataError}
    />
)
