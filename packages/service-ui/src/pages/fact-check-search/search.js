import React, { useState, useEffect, useRef } from 'react'
import { Box, Stack, Heading, Text, TextInput, Button, Keyboard } from 'grommet'
import styled from 'styled-components'
import { Upload, ExternalLink as WebsiteLink } from 'react-feather'
import AppShell from '../../components/atomic/AppShell';
import { ExternalLink } from '../../components/atomic/TattleLinks';
import axios from 'axios';
import { Spinner } from '../../components/atomic/Spinner';
import { ARCHIVE_SERVER_PATH, TOKEN } from '../../config';
import { postWithToken } from '../../services/shell-server';
import { footerItems, primaryNav } from './options';


const s3AuthConf = {
    url: `${ARCHIVE_SERVER_PATH}/api/s3-auth`,
    token: TOKEN 
}

const InvisibleFileUploadButton = styled.input`
    background:red;
    display: none;
`


  

function SearchInput() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const fileUploader = useRef(null);

    const [result, setResult] = React.useState({status:'default'})

    const onSearch = () => {
        console.log('searching', searchQuery);
        setResult({status:'loading'})
        postWithToken('/search/find-text-in-image',
            {
                text: searchQuery
            },
            TOKEN
        )
        .then((res) => {
            console.log(res)
            res.data
            setResult(res.data)
            //setResult(res.data)
        })
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
                    <Heading level={2}> Found on </Heading>
                        {
                            result.urls && result.urls.map((match)=>(
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
                        {
                            result.posts && result.posts.map((match)=>(
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
        <AppShell
            headerLabel={'Factcheck Search'}
            footerItems={footerItems}
            primaryNav={primaryNav}
        >
            <SearchInput />
        </AppShell>
    )
}

export default Search