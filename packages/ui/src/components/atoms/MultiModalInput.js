import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ChevronDown, Search } from "react-feather"
import * as Icon from 'react-feather'
import {Box, Text, TextInput, Button} from 'grommet'

const SearchTypeDropdown = styled.div`
    background: #ededed;
    cursor: pointer;
`


const InvisibleFileUploadButton = styled.input`
    background:red;
    display: none;
`

const dropDownOptions = {
    0 : {icon: 'type', label: 'text'},
    1 : {icon: 'link-2', label: 'url'},
    2 : {icon: 'upload', label: 'file'},
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
                props.icon=='upload'?<Icon.Upload size={24}/> : null
            }
            <Text > {props.label} </Text>
        </Box>
    )
}

const SearchDropdownOptions = styled.div`
    background: #ededed;
    position: absolute;
`

const createPayload = (selection, textQuery, urlQuery) => {
    switch(selection){
        case 0:
            return({mode:'text', data:{query:textQuery}});
        case 1 :
                return({mode:'url', data:{query: urlQuery}});
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

const MultiModalInput = ({onSubmit}) => {
    const [fetching, setFetching] = useState(false)
    const [expanded, setExpanded] = React.useState(false)
    const [selection, setSelection] = React.useState(0)
    
    const [textSearchQuery, setTextSearchQuery] = React.useState('');
    const [urlSearchQuery, setUrlSearchQuery] = React.useState('');

    const fileUploader = useRef(null);

    const toggleDropdown = (event, info) => {
        setExpanded(!expanded)
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
                            label="Upload Files"
                            onClick={() => {fileUploader.current.click()}}
                            fill={'vertical'}
                            color={'border'}
                        /> 
                        <InvisibleFileUploadButton type='file' ref={fileUploader} onChange={console.log('file added')}/>
                    </Box>
                    : 
                    null
                }
            </Box>

            <Box align={'center'} 
                margin={'medium'}>
                    <Button plain icon={<Search/>} onClick={()=>onSubmit(createPayload(selection, textSearchQuery, urlSearchQuery))} />
            </Box>
        </Box>
        
        {expanded && (
            <SearchDropdownOptions>
                <Box elevation={'small'}>
                    <SearchTypeItem id={0} onSelect={itemSelected} icon='type' label='text'/>
                    <SearchTypeItem id={1} onSelect={itemSelected} icon='link-2' label='url'/>
                    <SearchTypeItem id={2} onSelect={itemSelected} icon='upload' label='file'/>
                </Box>
            </SearchDropdownOptions>
        )}
    </Box>
)
}

export default MultiModalInput