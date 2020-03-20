import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, DropButton, Button } from 'grommet'
import { Link, ExternalLink } from '../../atomic/TattleLinks'

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

        <ExternalLink 
            target={'_blank'}
            href={'https://docs.google.com/forms/d/e/1FAIpQLSd6KtwsHiS1JaIME0D7n6CDrqZR3swI4D9i8fR2kr1Lp2CTvA/viewform'}
        >
            <Button label={'Access Dataset'} align={'center'} pad={'medium'} />
        </ExternalLink>     
        
        // <Box>
        //     <DropButton
        //         label="Access Data"
        //         open={open}
        //         onOpen={onOpen}
        //         onClose={onClose}
        //         dropContent={<DropContent onClose={onClose} />}
        //         dropProps={{ align: { top: "bottom" } }}
        //     />
        // </Box>
    )
}

export default DataAccess