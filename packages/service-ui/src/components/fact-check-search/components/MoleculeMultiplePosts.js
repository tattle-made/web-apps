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

const emptyData= {
    status: 'data',
    posts: [
        { id: 1, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 2, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 3, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 4, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 5, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 6, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 7, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 8, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 9, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 10, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 11, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 12, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 13, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 14, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 15, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 16, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 17, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 18, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 19, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 20, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 21, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 22, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 23, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 24, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 25, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 26, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 27, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 28, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 29, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
        { id: 30, type: 'image', mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgIN1oLILDJlQKBF-OYMrPwelj-lFTq-tt0X3lLxU6bwNSv1zts'},
    ]
}

const MoleculeMultiplePosts = ({ title, data}) => {
    return(
        <Box
            
        >
            <Box 
                direction={'row'}
                align={'center'}
                gap={'medium'}
            > 
                <Heading level={4}>{title}</Heading>
                
            </Box>

            <Box height={'xxsmall'}>
                { data.status=='loading' && spinning }
            </Box>

            {
                data.status === 'default' ?
                <Box>  </Box>
                :
                data.status==='loading'?
                    <Box 
                        direction={'row'} 
                        wrap={true}
                    >
                        {
                            
                            emptyData.posts.map((post) => (
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