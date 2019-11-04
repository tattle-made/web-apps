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

/**
* @author
* @function MultiModalSearch
todo : the box height of '48 px' that was hardcoded needs to have a better approach
**/

const MultiModalInput = () => {
    const [fetching, setFetching] = useState(false)
    const [expanded, setExpanded] = React.useState(false)
    const [selection, setSelection] = React.useState(0)

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
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                    /> : 
                    selection == 1 ?
                    <TextInput
                        placeholder="http://"
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
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
                <Search/>
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