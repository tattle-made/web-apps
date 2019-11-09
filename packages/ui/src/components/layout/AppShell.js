import React, { useState, useEffect } from 'react'
import {Grommet} from 'grommet'
import TattleTheme from '../../theme'


/**
* @author
* @function AppShell
**/

const AppShell = ({children}) => {

return (
    <Grommet full theme={TattleTheme}>
        {children}
    </Grommet>
)
}

export default AppShell