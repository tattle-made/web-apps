import React from 'react'
import {Box, Heading, Text} from 'grommet';
import SinglePost from './SinglePost';

const spinning = (
    <svg
        version="1.1"
        viewBox="0 0 32 32"
        width="22px"
        height="22px"
        fill="#333333"
    >
        <path
        opacity=".25"
        d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur="0.8s"
            repeatCount="indefinite"
        />
        </path>
    </svg>
);

/**
* @author denny
* @function MoleculeSemanticallySimilarPost
status : default, loading, error
message : text depending on status
**/

const MoleculeMultiplePosts = ({ title, data}) => {
    return(
        <Box
            align={'end'}
        >
            <Box 
                direction={'row'}
                align={'center'}
                gap={'medium'}
            > 
                <Heading level={4}>{title}</Heading>
                { data.status=='loading' && spinning }
            </Box>
            {
                data.status === 'default' ?
                <Box>  </Box>
                :
                data.status==='data' ?
                <Box 
                    direction={'row'} 
                    wrap={true}
                >
                    {data.posts.map((post) => (
                        <Box 
                            key={post.id}
                            margin={{right:'small', bottom:'small'}}
                        >
                            <SinglePost
                                type={post.type}
                                src={post.mediaUrl}
                            />
                        </Box>
                    ))}
                </Box>
                :
                data.status==='error' ?
                <Box> 
                    <Text size={'small'} color={'status-error'}> {data.message} </Text> 
                </Box>
                :
                <Box> </Box>
                
            }
        </Box>
    )
}

export default MoleculeMultiplePosts