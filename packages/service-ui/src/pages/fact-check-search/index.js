import React, { useState, useEffect } from 'react'
// import { Atoms } from '@tattle-made/ui';

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
        </div>
    )
}

export default FactCheckSearch