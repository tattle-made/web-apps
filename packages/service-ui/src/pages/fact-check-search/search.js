import React, { useState, useEffect, useRef } from 'react'
import { Box, Stack, Heading, Text, TextInput, Button, Keyboard } from 'grommet'
import styled from 'styled-components'
import { Upload, ExternalLink as WebsiteLink } from 'react-feather'
import AppShell from '../../components/fact-check-search/components/AppShell';
import { ExternalLink } from '../../components/fact-check-search/components/TattleLinks';
import axios from 'axios';
import { Spinner } from '../../components/fact-check-search/components/Spinner';


const API_URL = 'http://archive-staging.ap-south-1.elasticbeanstalk.com:3003/api'
const TOKEN = '7d5208f0-4295-11ea-b1cd-857f27f10814'

const s3AuthConf = {
    url: 'http://archive-staging.ap-south-1.elasticbeanstalk.com:3003/api/s3-auth',
    token: TOKEN 
}

const InvisibleFileUploadButton = styled.input`
    background:red;
    display: none;
`


const postWithToken = (endpoint, payload, token)=>{
    return axios.post(`${API_URL}${endpoint}`, 
      payload,
      {
        headers: {token}
      }
      )
    .catch((err) => console.log('ERROR IN API CALL ',err));
  }
  

function SearchInput() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const fileUploader = useRef(null);

    const [result, setResult] = React.useState({status:'default'})

    const onSearch = () => {
        console.log('searching', searchQuery);
    }

    const onFileChangeHandler = (event) => {
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const fileName = file.name;
        const fileType = file.type;
        const s3FileUrl = `https://tattle-services-search.s3.ap-south-1.amazonaws.com/${fileName}`
        
        // setFileSearchQuery({status:'loading'})
    
        // console.log({fileName, fileType});

        setResult({status:'loading'})
    
        axios.post(s3AuthConf.url, {
            type: fileType,
            filename: fileName
        }, {
            headers: {
                token : s3AuthConf.token
            }
        }
        )
        .then((response) => {
            return response.data.signedUrl;
        })
        .then((signedUrl) => {
            var options = {
                    headers: {
                        'Content-Type': file.type
                    }
                };
            return axios.put(signedUrl, file, options)
        })
        .then((uploadResponse) => {{
            // setFileSearchQuery({status:'data', query: s3FileUrl})
            console.log('file URL ', s3FileUrl)
            return postWithToken(
                '/search/duplicate-stories',
                {
                    url: s3FileUrl
                },
                TOKEN
            )
        }})
        .then((data) => {
            console.log(data)
            setResult(data.data)
        })
        .catch((err) => {
            // setFileSearchQuery({status:'error'})
            console.log(err)
        });
    }

    return (
        <Box gap={'small'}>
            <Stack anchor="right">
                <Keyboard onEnter={onSearch}>
                    <TextInput
                        placeholder="Search for fact checked stories"
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)}
                    />
                </Keyboard>
                <Box 
                    pad={'small'}
                    hoverIndicator={'true'}
                    margin={{right: 'medium'}}
                    align={'center'}
                >
                    <Button 
                        plain
                        onClick={() => {fileUploader.current.click()}}
                    >
                        <Upload size={24}/>
                    </Button>
                </Box>
            </Stack>
            <InvisibleFileUploadButton type='file' ref={fileUploader} onChange={onFileChangeHandler}/>
            {
                result.status==='data' ? 
                <Box margin={{top : 'medium'}}>
                    <Heading level={2}> Also seen on </Heading>
                        {
                            result.urls.map((match)=>(
                                <Box key={match.id} margin={{top:'small', bottom:'medium'}} fill={'horizontal'}>
                                    <Heading level={4} margin={'none'}> {match.title} </Heading>
                                    <Box direction={'row'} 
                                        gap={'xsmall'} 
                                        wrap={true}
                                        margin={{top:'xsmall'}}
                                    >
                                        <Box pad={'xsmall'} 
                                            border={true} round={'small'} 
                                            background={'light-3'}>
                                            <Text> high </Text>
                                        </Box>
                                        <Box direction={'row'} 
                                            wrap={true}
                                            align={'center'}
                                            gap={'xsmall'}
                                        >
                                            <Text> {match.timestamp} </Text>
                                            <ExternalLink href={match.url} target={'_blank'}>
                                                <WebsiteLink size={16}/>
                                            </ExternalLink>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                :
                result.status==='loading' ?
                <Box height={'56vh'}> 
                    <Spinner />
                </Box>
                :
                result.status==='default' ?
                <Box height={'56vh'}>
                    
                </Box>
                :
                <Box> 
                    Something unexpected happen
                </Box>
            }
        </Box>
    );
}

/**
* @author
* @function Search
**/

const Search = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <AppShell>
            <SearchInput />
        </AppShell>
    )
}

export default Search