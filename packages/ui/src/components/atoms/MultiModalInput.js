import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ChevronDown, Search } from "react-feather"
import * as Icon from 'react-feather'
import {Box, Text, TextInput, Button} from 'grommet'
import axios from 'axios';

const SearchTypeDropdown = styled.div`
    background: #ededed;
    cursor: pointer;
`

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


const InvisibleFileUploadButton = styled.input`
    background:red;
    display: none;
`

const dropDownOptions = {
    0 : {icon: 'type', label: 'text'},
    1 : {icon: 'link-2', label: 'url'},
    2 : {icon: 'upload', label: 'file'},
    3 : {icon: 'tag', label: 'tags'}
}



const SearchTypeItem = (props) => {
    const [active, setActive] = React.useState(false);
    const onMouseEnter = ()=> setActive(true);
    const onMouseLeave = ()=> setActive(false);

    return (
        <Box 
            direction={'row'} 
            align={'end'}
            gap={'small'}
            pad={'medium'}
            width={'8.0em'}
            background={active?'light-3':'light-1'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={()=> {props.onSelect(props.id)}}
        >
            {
                props.icon=='type'?<Icon.Type size={24} /> :
                props.icon=='link-2'?<Icon.Link2 size={24}/> :
                props.icon=='upload'?<Icon.Upload size={24}/> : 
                props.icon=='tag'?<Icon.Tag size={24}/> : null
            }
            <Text > {props.label} </Text>
        </Box>
    )
}

const SearchDropdownOptions = styled.div`
    background: #ededed;
    position: absolute;
`

const createPayload = (selection, textQuery, urlQuery, fileQuery, tagQuery) => {
    switch(selection){
        case 0:
            return({mode:'text', data:{query:textQuery}});
        case 1 :
                return({mode:'url', data:{query: urlQuery}});
        case 2 :
                return({mode:'file', data: {query: fileQuery.query}})
        case 3 :
                return({mode:'tag', data: {query: tagQuery}})
        default:
            return({});
    }
}


/**
* @author
* @function MultiModalSearch
todo : the box height of '48 px' that was hardcoded needs to have a better approach
selection id mappings : 0-> text 1-> url 2-> file
**/

const MultiModalInput = ({onSubmit, s3AuthConf}) => {
    const [fetching, setFetching] = useState(false)
    const [expanded, setExpanded] = React.useState(false)
    const [selection, setSelection] = React.useState(2)
    
    const [textSearchQuery, setTextSearchQuery] = React.useState('');
    const [urlSearchQuery, setUrlSearchQuery] = React.useState('');
    const [fileSearchQuery, setFileSearchQuery] = React.useState({status:'default'})
    const [tagQuery, setTagQuery] = React.useState()

    const [s3AuthConfig, setS3AuthConf] = React.useState(s3AuthConf);

    const fileUploader = useRef(null);

    const toggleDropdown = (event, info) => {
        setExpanded(!expanded)
    }

const onFileChangeHandler = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const fileName = file.name;
    const fileType = file.type;
    const s3FileUrl = `https://tattle-services-search.s3.ap-south-1.amazonaws.com/${fileName}`
    
    setFileSearchQuery({status:'loading'})

    // console.log({fileName, fileType});

    axios.post(s3AuthConfig.url, {
        type: fileType,
        filename: fileName
    }, {
        headers: {
            token : s3AuthConfig.token
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
        setFileSearchQuery({status:'data', query: s3FileUrl})
    }})
    .catch((err) => {
        setFileSearchQuery({status:'error'})
        console.log(err)
    });
}

useEffect(()=> {
    setFetching(true)
})

const itemSelected = (id) =>  {
    setExpanded(false)
    setSelection(id)
}

return(
    <Box background='light-1'>
        <Box 
            direction={'row'}
            align={'center'}
            gap={'medium'}
        >
            <Box 
                direction={'row'} 
                onClick={toggleDropdown}
                align={'center'}
                gap={'small'}
            >
                <SearchTypeItem id={dropDownOptions[selection].id} onSelect={itemSelected} icon={dropDownOptions[selection].icon} label={dropDownOptions[selection].label}/>
                <ChevronDown color="black" size={20} />
            </Box>

            <Box 
                pad={'small'}
                flex={'grow'}
                >
                {
                    selection == 0 ? 
                    <TextInput
                        placeholder="Enter text"
                        value={textSearchQuery}
                        onChange={event => setTextSearchQuery(event.target.value)}
                    /> : 
                    selection == 1 ?
                    <TextInput
                        placeholder="http://"
                        value={urlSearchQuery}
                        onChange={event => setUrlSearchQuery(event.target.value)}
                    /> :
                    selection == 2 ? 
                    <Box 
                        height={'48px'}
                        alignContent={'center'}
                        
                    >
                        
                            <Button
                                onClick={() => {fileUploader.current.click()}}
                                fill={'vertical'}
                                color={'border'}
                            >
                                <Box direction={'row'}
                                    align={'center'}
                                    gap={'medium'}
                                    pad={{horizontal: 'medium', vertical: 'xsmall'}}
                                    round={'small'}
                                    border={
                                        {
                                            "side": 'all',
                                            "color" : 'border'   
                                        }
                                    }
                                >
                                    {
                                        fileSearchQuery.status==='default'?<Text> Upload Files </Text> :
                                        fileSearchQuery.status==='error'?<Text color={'status-error'}> Error uploading file </Text> :
                                        fileSearchQuery.status==='data'?<Text color={'status-ok'}> Ready for search </Text> :
                                        fileSearchQuery.status==='loading'?<Text color={'status-ok'}> Uploading </Text> :
                                        <Text color={'status-ok'}> Unknown Error </Text>
                                    }
                                    { fileSearchQuery.status==='loading' && spinning}
                                </Box>
                            </Button> 
                            
                        <InvisibleFileUploadButton type='file' ref={fileUploader} onChange={onFileChangeHandler}/>
                    </Box>
                    :
                    selection == 3 ?
                    <TextInput
                        placeholder="Describe what you are looking for"
                        value={tagQuery}
                        onChange={event => setTagQuery(event.target.value)}
                    /> 
                    : 
                    null
                }
            </Box>

            <Box align={'center'} 
                margin={'medium'}>
                    <Button plain icon={<Search/>} onClick={()=>onSubmit(createPayload(selection, textSearchQuery, urlSearchQuery, fileSearchQuery, tagQuery))} />
            </Box>
        </Box>
        
        {expanded && (
            <SearchDropdownOptions>
                <Box elevation={'small'}>
                    <SearchTypeItem id={2} onSelect={itemSelected} icon='upload' label='file'/>
                    <SearchTypeItem id={0} onSelect={itemSelected} icon='type' label='text'/>
                    <SearchTypeItem id={1} onSelect={itemSelected} icon='link-2' label='url'/>
                    <SearchTypeItem id={3} onSelect={itemSelected} icon='tag' label='tags'/>
                </Box>
            </SearchDropdownOptions>
        )}
    </Box>
)
}

export default MultiModalInput