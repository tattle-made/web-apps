import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Stack, Heading, Text, TextInput, Button, Keyboard } from 'grommet'
import styled from 'styled-components'
import { Upload, ExternalLink as WebsiteLink } from 'react-feather'
import AppShell from '../../components/atomic/AppShell';
import { ExternalLink } from '../../components/atomic/TattleLinks';
import axios from 'axios';
import { Spinner } from '../../components/atomic/Spinner';
import { ARCHIVE_SERVER_PATH, TOKEN } from '../../config';
import { postWithToken } from '../../services/shell-server';
import { footerItems, primaryNav } from '../../config/options';
import Dropzone from 'react-dropzone'


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

    const onDrop = (acceptedFiles) => {
        // Do something with the files
        console.log('==files==')
        console.log(acceptedFiles);

        const file = acceptedFiles[0]
        const fileName = file.name;
        const fileType = file.type;
        // setServiceState({type:'PREVIEW', payload:{file:{preview: URL.createObjectURL(file)}}})
        setResult({status:'loading'})

        const s3FileUrl = `https://tattle-services-search.s3.ap-south-1.amazonaws.com/${fileName}`

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
    };


    return (
        <Box gap={'small'}>
            <Box flex={false} hoverIndicator={true}>
                <Dropzone onDrop={onDrop}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Box border={{color:'#020637', style: 'dashed', size:'small'}} 
                            pad={'medium'} 
                            align={'center'}
                            round={'small'}
                            >
                                Drag 'n' drop your image here, or click to upload it.
                            </Box>
                        </div>
                        </section>
                    )}
                    </Dropzone>
            </Box>
            <Text size={'xsmall'}>
                Images that you search for are temporarily stored on our servers to allow searching. These images are not added to Tattle's database of content.
            </Text>
            {
                result.status==='data' ? 
                <Box margin={{top : 'medium'}} fill={'horizontal'}>
                        {
                            result.urls ? 
                                <Heading level={2}> Found on </Heading>
                            :
                                <Heading level={2}> No match found </Heading>
                        }
                        {
                            result.urls && result.urls.map((match)=>(
                                <Box flex={false} key={match.id} margin={{top:'small', bottom:'medium'}} direction={'column'}>
                                    <ExternalLink href={match.url} target={'_blank'}>
                                        <Heading level={4} margin={'none'}> {match.title}> </Heading>
                                        <Box direction={'row'} 
                                            gap={'xsmall'} 
                                            wrap={true}
                                            margin={{top:'xsmall'}}
                                        >
                                            
                                            <Box pad={'xsmall'} 
                                                round={'small'} 
                                                background={'brand'}>
                                                <Text color={'#eeeeee'}> {match.domain} </Text>
                                            </Box>
                                            <Box direction={'row'} 
                                                wrap={true}
                                                align={'center'}
                                                gap={'xsmall'}
                                            >
                                                <Text> {match.timestamp} </Text>
                                                <WebsiteLink size={16}/>
                                            </Box>
                                            
                                        </Box>
                                    </ExternalLink>
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
                    Something unexpected happened. We'll look into it. Please try again later.
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
            headerLabel={'Khoj'}
            footerItems={footerItems}
            primaryNav={primaryNav}
            expandCenter={true}
        >
            <SearchInput />
        </AppShell>
    )
}

export default Search