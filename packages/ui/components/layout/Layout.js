import React from "react"
import PropTypes from 'prop-types'
//lets use this as standard layout
import { Grommet, Box, Stack, Layer, Heading, Text, Grid } from 'grommet'
import { Menu, Checkbox, Close } from 'grommet-icons'
import {Button} from 'grommet'
import {Edit} from 'grommet-icons'

import { Menu as Menu2 } from "grommet";
import { FormDown, Github, Slack } from "grommet-icons";

import SEO from './seo'

const myTheme = {
    global: {
        font: {
            family: 'Raleway',
        },
    },
    heading: {
        font: {
            family: 'Montserrat',
        },
    }
  };


const Layout = props => {
    const menuClickHandler = () => {setModal(!isModal)}

    const [isModal, setModal] = React.useState(false)

    return (
        <Grommet theme={myTheme}>                
            <SEO title="Home" />
            <Stack>
                <Box>
                    <Box
                        pad="small"
                        direction={"row"}
                        gap={"small"}
                    >
                        <Menu onClick={menuClickHandler} size={'large'} />
                        <Box direction={"row"} align={"center"}>
                            <Checkbox size={'large'} />
                            <Heading> Tattle </Heading>
                        </Box>

                        
                    </Box>

                    {props.content}

                    <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nisi a quam luctus dignissim ut a massa. Suspendisse elementum velit at tempus aliquet. </Text>

                    
                </Box>

                {isModal && (
                    <Layer full animation="none">
                        <Box
                            fill
                            onClick={menuClickHandler}
                            background={"#ffffff"}
                        >
                            <Box pad="small">
                                <Close size={'large'} />
                            </Box>
                        </Box>
                    </Layer>
                )}
            </Stack>

            <Grid
                rows={['xxsmall', 'xsmall']}
                columns={['xsmall', 'small']}
                gap="small"
                areas={[
                    { name: 'header', start: [0, 0], end: [1, 0] },
                    { name: 'nav', start: [0, 1], end: [0, 1] },
                    { name: 'main', start: [1, 1], end: [1, 1] },
                ]}
                >
                    <Box gridArea="header" background="brand" />
                    <Box gridArea="nav" background="light-5" />
                    <Box gridArea="main" background="light-2" />
            </Grid>
            
            <Grid
                areas={[
                    {name: 'pehla', start:[0,0], end:[1,0] },
                    {name: 'doosra', start:[1,0], end:[4,0] },
                ]}
            >
                <Box gridArea='pehla' background='light-1'> 1 </Box>
                <Box gridArea='doosra' background='light-2'> 1 </Box>
            </Grid>
            
        </Grommet>
    )
}

Layout.propTypes = {
    content : PropTypes.object
}

export default Layout
