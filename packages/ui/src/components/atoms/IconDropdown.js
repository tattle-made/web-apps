import React from 'react'
import styled from 'styled-components'
import { Upload, Type, Link2, ChevronDown } from "react-feather"
import * as Icon from 'react-feather'
import {Box, Heading, Text} from 'grommet'

const SearchTypeDropdown = styled.div`
    background: #ededed;
    cursor: pointer;
`


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
            background={active?'light-3':'light-1'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
    z-Index: 5;
    box-shadow: 0px 4px 12px 0px rgba(199,199,199,1);
`

const IconDropdown = () => {
    const [selection, setSelection] = React.useState(false)

    const toggleDropdown = (event, info) => {
        setSelection(!selection)
    }

    return(
        <SearchTypeDropdown>
            <Box 
                direction={'row'}
                align={'center'}
                gap={'medium'}
            >
                <Box 
                    direction={'row'} 
                    onClick={toggleDropdown}
                    align={'end'}
                    gap={'small'}
                    border={{color:'brand', side:'all'}}
                >
                    <SearchTypeItem icon="type" label="text"/>
                    <ChevronDown color="black" size={20} />
                </Box>

                <Box 
                    background={'light-4'}
                    pad={'small'}
                    >
                    <Text>Temporary Region</Text>
                </Box>
            </Box>
            {selection && (
                <SearchDropdownOptions>
                    <SearchTypeItem icon='type' label='text'/>
                    <SearchTypeItem icon='link-2' label='url'/>
                    <SearchTypeItem icon='upload' label='file'/>
                </SearchDropdownOptions>
            )}
        </SearchTypeDropdown>
    )
}

export default IconDropdown