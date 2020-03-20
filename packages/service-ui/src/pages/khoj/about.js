import React from 'react'
import {Box, Heading, Paragraph, Text} from 'grommet'
import AppShell from '../../components/atomic/AppShell';
import { footerItems, primaryNav } from '../../config/options';
import { ExternalLink } from '../../components/atomic/TattleLinks';

/**
* @author
* @function About
**/

const About = () => {
 return (
    <AppShell
        headerLabel={'Khoj'}
        headerTarget={'/khoj'}
        footerItems={footerItems}
        primaryNav={primaryNav}
        expandCenter={true}
    >
        <Heading level={1}>
            About
        </Heading>
        <Paragraph fill={'true'}>
            The aim of Tattle Khoj is to allow users to search through the data Tattle collects, in modalities and languages that they are comfortable with.
        </Paragraph>
        <Paragraph fill={'true'}>
            This Version One of Search allows users to search for fact checking sites that might have used the same or similar image.
        </Paragraph>
        <Paragraph fill={'true'}>
            We are currently working on the following additional search features:
        </Paragraph>
        
        <ul>
            <li> Searching memes and fact checking sites in English, Hindi and Gujarati </li>
            <li> Search similar videos </li>
            <li> Searching audios </li>
        </ul>

        <Paragraph fill={'true'}>
            As with any matching systems, this system too can make mistakes. Certain search results might not contain the message users search for, and in other cases the search might miss stories that do contain that image. We would be grateful if these errors could be flagged as it will help improve the search.
        </Paragraph>
        <Paragraph fill={'true'}>
            You can flag them on Twitter or Github using Github Issues.
        </Paragraph>
        <Paragraph fill={'true'}>
            We are also working on making the user interface more intuitive. We would love any feedback you might have on the website.
        </Paragraph>

        <Paragraph fill={true}>
        Tattle Search currently surfaces content from the following six websites:
        </Paragraph>

        <ul>
            <li> Altnews - English and Hindi </li> 
            <li> Quint </li>
            <li> Boomlive - English, Hindi and Bangla </li>
            <li> Vishvasnews - Hindi, English, Punjabi, Urdu and Assamese </li>
            <li> IndiaToday </li>
            <li> Factly - English and Telugu </li>
        </ul>
        
        <Box direction="row" gap={'xsmall'} flex={false} align={'center'}> 
            <Text> The search functionality and the underlying data is publicly available for researchers under the</Text>
            <ExternalLink
                href={'https://opendatacommons.org/licenses/odbl/'}
                target={'_blank'}
            >
                <Text> ODb Licence </Text>
            </ExternalLink>
        </Box>
    </AppShell>
 )
}

export default About