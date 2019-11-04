import React from 'react'
import {Box, Heading} from 'grommet';
import {Atoms} from '@tattle-made/ui'

const {MediaBlock} = Atoms;
const {SinglePost} = MediaBlock;

/**
* @author denny
* @function MoleculeDuplicatePost
status : default, loading, error
message : text depending on status
**/

const MoleculeDuplicatePost = ({visible, title, data}) => {
    return (
        data.status === 'default' ?
        <Box> 1 </Box>
        :
        data.status==='data' && visible ?
        <Box>
            <Heading level={4}>{title}</Heading>
            <SinglePost
                    type={data.type}
                    src={data.mediaUrl}
            />
        </Box>
        :
        <Box></Box>
    )
}

export default MoleculeDuplicatePost