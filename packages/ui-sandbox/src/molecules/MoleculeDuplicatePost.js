import React from 'react'
import {Box, Heading} from 'grommet';
import {Atoms} from '@tattle-made/ui'

const {MediaBlock} = Atoms;
const {SinglePost} = MediaBlock;

/**
* @author denny
* @function MoleculeDuplicatePost
**/

const MoleculeDuplicatePost = ({visible, title, data}) => {
    return (
        visible ?
        <Box>
            <Heading level={4}>{title}</Heading>
            <SinglePost
                type={'image'}
                src={"https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/image-posts%2F425f24f2-eda6-4e9f-99ec-d0eeb0b64db4?alt=media&token=fdbbb89f-1662-4652-9037-768a9d8b7424"}
            />
        </Box>
        :
        <Box></Box>
    )
}

export default MoleculeDuplicatePost