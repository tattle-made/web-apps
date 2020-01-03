import React, { useState, useEffect, useRef } from 'react'
import { Box, Stack, Heading, Text, TextInput, Button, Keyboard } from 'grommet'
import styled from 'styled-components'
import { Upload, ExternalLink as WebsiteLink } from 'react-feather'
import AppShell from '../../components/fact-check-search/components/AppShell';
import { ExternalLink } from '../../components/fact-check-search/components/TattleLinks';
import axios from 'axios';

const s3AuthConf = {
    url: 'http://13.235.149.236:3003/api/s3-auth',
    token: '795e30d0-2e0d-11ea-bccd-f902c27eeb11'
}

const InvisibleFileUploadButton = styled.input`
    background:red;
    display: none;
`

const matches = {
    status : 'data',
    posts : [
        {
            id : 123123,
            domain : 'altnews.in/hindi',
            url : 'http://www.google.com',
            headline : 'Sed maximus dignissim orci sit amet molestie.',
            distance : 0.01
        },
        {
            id : 1231234,
            domain : 'quint.com',
            url : 'http://www.google.com',
            headline : 'Maecenas velit felis, pharetra eu facilisis vulputate, facilisis condimentum elit. Phasellus et lectus ac velit congue pellentesque.',
            distance : 5.0
        },
        {
            id : 23495,
            domain : 'vishvasnews',
            url : 'http://www.google.com',
            headline : 'Nullam nibh lorem, suscipit non dui sit amet, posuere convallis nibh.',
            distance : 15.0
        }
    ] 
}

function SearchInput() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const fileUploader = useRef(null);

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
        }})
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
            <Box margin={{top : 'medium'}}>
                <Heading level={2}> Also seen on </Heading>
                    {
                        matches.posts.map((match)=>(
                            <Box key={match.id} margin={{top:'small', bottom:'medium'}} fill={'horizontal'}>
                                <Heading level={4} margin={'none'}> {match.headline} </Heading>
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
                                        <Text> {match.domain} </Text>
                                        <ExternalLink href={match.url} target={'_blank'}>
                                            <WebsiteLink size={16}/>
                                        </ExternalLink>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
            </Box>
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