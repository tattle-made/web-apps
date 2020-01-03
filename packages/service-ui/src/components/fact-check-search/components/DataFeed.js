import React, { useState, useEffect } from 'react'
import {Box, Heading, Text, CheckBox, Button} from 'grommet'
import DataAccess from './DataAccess'
import MoleculeMultiplePosts from './MoleculeMultiplePosts'
import { ArrowLeft, ArrowRight } from 'react-feather';
import DataFeedControls from '../DataFeedControls';

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
        },
        {
            "id": 261,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 262,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 263,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 264,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 265,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 266,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 267,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 268,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 269,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 270,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 271,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 272,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        }
    ]
}


/**
* @author 
* @function DataFeed
**/

const DataFeed = () => {

    const [pageCount, setPageCount] = useState(30)
    const [fetching, setFetching] = useState(false)
    const [ pageNumber, setPageNumber ] = useState(1)

    const increment = () => {
        if(pageNumber!=pageCount){
            setPageNumber(pageNumber+1)
        }
    }

    const decrement = () => {
        if(pageNumber!=1){
            setPageNumber(pageNumber-1)
        }
    }

    useEffect(()=> {
        setFetching(true)
    })

    const onFilterChange = (params) => {
        console.log(params)
    }

    return (
        <Box>
            <Box direction={'row'} 
                fill={'horizontal'} 
                margin={{top: 'large'}}
            >
                <DataFeedControls onChange={onFilterChange}/>
                <DataAccess/>
            </Box>

            <Box margin={{top:'medium'}}>
                <MoleculeMultiplePosts
                    data={ multipleMediaBlockData }
                />
            </Box>
            
            <Box 
                fill={'horizontal'} 
                margin={{top:'medium'}}
                direction={'row'}
                gap={'small'}
                align={'center'}
            >
                <Button 
                    plain 
                    margin={'none'}
                    onClick={decrement}
                >
                    <ArrowLeft size={16}/>
                </Button>
                <Text> showing page {pageNumber} of {pageCount} </Text>
                <Button 
                    plain
                    margin={'none'}
                    onClick={increment}
                >
                    <ArrowRight size={16}/>
                </Button>
            </Box>
        </Box>
    )
}

export default DataFeed