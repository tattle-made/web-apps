import React from "react"
import {Grommet, Box, Heading, Text, Layer} from 'grommet'
import { Layout, Atoms } from '@tattle-made/ui';

const {AppShell, LayoutPortal} = Layout;
const {Status} = Atoms;

const MenuItem = ({label}) => (
  <Link to={'/user'}>
      <Box direction={'row'} gap={'small'}>
        {/* <FontAwesomeIcon icon={props.icon} color='#000637' /> */}
        <Heading level={2}> {label} </Heading>
      </Box>
    </Link>
);

const SecondPage = () => (
  <AppShell>
    <LayoutPortal
      primaryNavigationContent={
        <>
          <Heading> Navigation </Heading>
          <MenuItem label={'User'}/>
          <Heading level={2}> Post </Heading>
          <Heading level={2}> Search </Heading>
        </>
      }
      mainSectionContent={
        <Heading> Main </Heading>
      }
    >
    </LayoutPortal>
    
    <Status
      type={'ok'}
      visibility={true}
      message={'Error fetching resources'}
    />

  </AppShell>
)

export default SecondPage
