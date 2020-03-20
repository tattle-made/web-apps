import React, { useState, useEffect } from 'react'
import {Heading, Paragraph} from 'grommet'
import AppShell from '../../components/atomic/AppShell';
import { footerItems, primaryNav } from '../../config/options';

/**
* @author
* @function Search
**/

const Contribute = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <AppShell
            headerLabel={'Khoj'}
            headerTarget={'/khoj'}
            footerItems={footerItems}
            primaryNav={primaryNav}
            expandCenter={true}
        >
            <Heading level={1}>
                Contribute
            </Heading>
            <Paragraph fill={'true'}>
                Tattle Khoj is a fast evolving project. Future iterations of this service will allow for:
            </Paragraph>
            <ul>
                <li> Searching for fact checking sites using text in Indian languages (English, Hindi, Gujarati is coming up soon). </li>
                <li> Searching for memes by the text embedded in them. </li>
                <li> Searching by videos </li>
                <li> Searching by tags </li>
            </ul>

            <Paragraph fill={'true'}>
                Simultaneously, the site can also be adapted in other forms such as a mobile app or a web browser plugin that allows for more people to access it.
            </Paragraph>

            <Heading level={3}>
                It Takes a Village...
            </Heading>

            <Paragraph fill={'true'}>
                There are multiple ways to contribute to Tattle Khoj. On the technical front, you can help out in building any of the above mentioned features.  If you speak an Indian language, help expand the search functionality to your native tongue. If you have a few hours to spare, help us annotate the data so that people may be able to search this repository via tags. 
            </Paragraph>

            <Paragraph fill={'true'}>
                You can reach out to us with questions and suggestion on admin@tattle.co.in
            </Paragraph>
        </AppShell>
    )
}

export default Contribute
