import React, { useState, useEffect } from 'react'
import {Layout, Section} from 'ui'
const {LayoutPortal} = Layout;

/**
* @author
* @function Settings
**/

const Settings = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
    setFetching(true)
    })

    return (
        <LayoutPortal
            content={
                <h3> Settings </h3>
            }
        />
    )
}

export default Settings