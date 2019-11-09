import React from 'react'
import {Grommet, ResponsiveContext, Box, Stack, Grid, Heading, Text} from 'grommet'
import {Layout} from '@tattle-made/ui';
const {LayoutPortal, AppShell} = Layout;


/**
* @author
* @function Layout
**/

const LayoutPage = () => {
    return (
        <AppShell>

                <LayoutPortal
                    primaryNavigationContent={
                        <Heading> Navigation </Heading>
                    }
                    mainSectionContent={
                        <>
                        <Heading> Main </Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam massa, varius quis faucibus vel, eleifend eu leo. Donec felis massa, semper in massa sit amet, eleifend facilisis nulla. Nunc lacinia, sapien a tincidunt pellentesque, odio libero feugiat ligula, vel dictum lorem diam quis leo. Duis placerat a justo non tempor. Quisque aliquet felis ac nibh vulputate, et condimentum arcu consectetur. Sed ac risus fringilla, mattis lectus sed, porttitor libero. Praesent mattis eros mi, at condimentum metus congue sit amet. Aenean aliquam pharetra purus id lacinia.
                            Fusce condimentum posuere est id luctus. Maecenas sed sem iaculis, euismod justo ut, scelerisque dolor. Quisque et malesuada sapien. Fusce tortor tortor, commodo non rutrum in, pulvinar at risus. Nunc enim leo, elementum et libero sit amet, dictum efficitur arcu. In tempor sodales lectus et laoreet. Donec dapibus tincidunt urna nec luctus. Aliquam erat volutpat. Phasellus nec nibh consequat, molestie est ut, tristique mi. 
                        </Text>
                        </>
                    }
                >
                </LayoutPortal>


        </AppShell>
    )
}

export default LayoutPage