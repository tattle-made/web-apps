import React from "react"
import {Grommet, Box, Heading, Text} from 'grommet'
import { Layout } from '@tattle-made/ui';

const {AppShell, LayoutPortal} = Layout;

const SecondPage = () => (
  <AppShell >
    <LayoutPortal
      primaryNavigationContent={
        <Heading> Navigation </Heading>
      }
      mainSectionContent={
        <Heading> Main </Heading>
      }
    >
    </LayoutPortal>
  </AppShell>
)

export default SecondPage
