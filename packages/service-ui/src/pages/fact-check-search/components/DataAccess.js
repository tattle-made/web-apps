import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, DropButton, Button } from 'grommet'
import { Link, ExternalLink } from './TattleLinks'

const DropContent = ({onClose}) => (
    <Box pad={'small'}>
        <Box direction={'column'} gap={'small'}>
            <ExternalLink href={'http://www.google.com'} target={'_blank'}> 
                <Text> Raw Data </Text>
            </ExternalLink>
            <ExternalLink href={'http://www.google.com'} target={'_blank'}>  
                <Text> Interactive Viewer </Text>
            </ExternalLink>
        </Box>
    </Box>
)


/**
* @author
* @function AccessData
**/

const DataAccess = () => {
    const [open, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false);
    }

    return (
        <Box align={'right'}>
            <DropButton
                label="Access Data"
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                dropContent={<DropContent onClose={onClose} />}
                dropProps={{ align: { top: "bottom" } }}
            />
        </Box>
    )
}

export default DataAccess