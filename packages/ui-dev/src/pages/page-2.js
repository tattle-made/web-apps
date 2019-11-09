import React from "react"
import {Grommet, Box, Heading, Text, Layer} from 'grommet'
import { Layout, Atoms } from '@tattle-made/ui';

const {AppShell, LayoutPortal} = Layout;
const {Status} = Atoms;

const SecondPage = () => (
  <AppShell>
    <LayoutPortal
      primaryNavigationContent={
        <Heading> Navigation </Heading>
      }
      mainSectionContent={
        <Heading> Main </Heading>
      }
    >
    </LayoutPortal>
    
    <Status
      type={'ok'}
      visibility={false}
      message={'Error fetching resources'}
    />
  </AppShell>
)

export default SecondPage
