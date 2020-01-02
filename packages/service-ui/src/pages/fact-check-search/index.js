import React, { useState, useEffect } from 'react'
import {Grommet, Box} from 'grommet'
import { Atoms } from '@tattle-made/ui';
const {Footer} = Atoms;
const {SmallFooter} = Footer;

const FooterItems = {
    primary : [
        { label : 'Tattle', target: '/tattle'},
        { label : 'Contribute', target: '/tattle'},
        { label : 'Blog', target: '/tattle'},
        { label : 'Contact', target: '/tattle'},
        { label : 'Status', target: '/tattle'},
    ],
}

/**
* @author
* @function FactCheckSearch
**/

const FactCheckSearch = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <div>
            {fetching && <h3>something</h3>}
            <SmallFooter items={FooterItems}/>
        </div>
    )
}

export default FactCheckSearch