import React, { useState, useEffect } from 'react'
import {Box, Heading, Text, CheckBox, Button} from 'grommet'
import DataAccess from './DataAccess'
import MoleculeMultiplePosts from './MoleculeMultiplePosts'
import { ArrowLeft, ArrowRight } from 'react-feather';

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
            "id": 258,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 263,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 264,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 265,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 266,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 267,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 268,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 269,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/e8d4bd70-e64c-11e9-9181-6390a1c38207"
        },
        {
            "id": 270,
            "type": "image",
            "mediaUrl": "https://tattle-services.s3.ap-south-1.amazonaws.com/944d7240-e626-11e9-8887-479c55adcf91"
        },
        {
            "id": 271,
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
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <Box>
        <Box direction={'row'} 
            fill={'horizontal'} 
            gap={'medium'}
            align={'center'}
            margin={{top: 'large'}}
        >
            <Box align={'baseline'}> <Heading level={'2'} margin={'none'}> Data </Heading> </Box>
            <Box direction={'row'} 
                gap={'small'}
                align={'baseline'}
                flex={'true'}
            >
                <CheckBox label={'text'}/>
                <CheckBox label={'image'}/>
                <CheckBox label={'video'}/>
            </Box>
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
            <Button plain margin={'none'}>
                <ArrowLeft size={16}/>
            </Button>
            <Text> showing page 3 of 42 </Text>
            <Button plain margin={'none'}>
                <ArrowRight size={16}/>
            </Button>
        </Box>
    </Box>
 )
}

export default DataFeed