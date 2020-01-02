import React, { useState, useEffect } from 'react'
import { Box, Stack, Heading, Text, TextInput, Button } from 'grommet'
import { Upload, ExternalLink as WebsiteLink } from 'react-feather'
import AppShell from './components/AppShell';
import { ExternalLink } from './components/TattleLinks';

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
    const [value, setValue] = React.useState('');
    return (
        <Box gap={'small'}>
            <Text> Enter a keyword </Text>
            <Stack anchor="right">
                <TextInput
                    placeholder="Search for fact checked stories"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <Box 
                    pad={'small'} 
                    elevation={'small'} 
                    border={true} round={'full'} 
                    hoverIndicator={'true'}
                    margin={{right: 'medium'}}
                >
                    <Button plain>
                        <Upload size={16}/>
                    </Button>
                </Box>
            </Stack>
            <Box margin={{top : 'medium'}}>
                <Heading level={2}> Also seen on </Heading>
                    {
                        matches.posts.map((match)=>(
                            <Box margin={{top:'small', bottom:'medium'}} fill={'horizontal'}>
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
                                        wrap={'true'}
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