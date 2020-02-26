import React, { useState, useEffect } from 'react'
import {Heading, Paragraph} from 'grommet'
import AppShell from '../../components/atomic/AppShell';
import { footerItems, primaryNav } from './options';

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
            headerLabel={'Factcheck Search'}
            footerItems={footerItems}
            primaryNav={primaryNav}
        >
            <Heading level={1}>
                Contribute
            </Heading>
            <Paragraph fill={'true'}>
                Lorems ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices nibh magna, vel sodales leo malesuada ut. Suspendisse bibendum porttitor ante, at consequat lorem. Vestibulum nibh quam, euismod a bibendum eu, faucibus sit amet dolor. Duis odio ante, dignissim quis pharetra ac, ornare non lacus. Ut sagittis neque dolor, id consectetur justo bibendum sit amet. Sed dignissim dui sed purus ultrices fringilla. Aenean et velit blandit, vestibulum tortor nec, semper felis. Maecenas lorem metus, cursus et massa convallis, pretium interdum arcu. Pellentesque iaculis nisi sit amet eros pharetra, et mollis lacus congue. Fusce lacinia at eros sodales eleifend. Morbi ut ullamcorper enim. Maecenas posuere nulla nec eros ullamcorper, quis ultrices lorem interdum. Praesent mauris velit, vestibulum ut imperdiet ac, efficitur in metus.
            </Paragraph>
            <Paragraph fill={'true'}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ac molestie nisi. Phasellus in sem vel massa efficitur elementum et sit amet ex. Maecenas felis sapien, aliquet vitae luctus at, luctus et ex. Sed feugiat ac diam ut tempus. Integer vestibulum, lacus ac convallis venenatis, purus arcu efficitur risus, sed vulputate ex tellus quis ligula. Ut venenatis pellentesque mi sit amet placerat. Mauris viverra egestas diam a aliquam. Vivamus hendrerit, justo ullamcorper sodales bibendum, felis lacus congue nulla, eu dignissim turpis urna vel quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed tempus magna ut dui interdum, et tincidunt est vestibulum. Nulla id sem at tellus molestie finibus non ut arcu.
            </Paragraph>
        </AppShell>
    )
}

export default Contribute