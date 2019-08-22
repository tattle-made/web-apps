/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Icon } from 'react-icons-kit'
import {ic_close} from 'react-icons-kit/md/ic_close'
import {Link} from 'gatsby'
import React from 'react';

const CloseIcon = () => (
    <div sx={{float: 'right',}}>
        <Link to="/">
            <Icon icon={ic_close}
            sx={{
                padding: 2,
                backgroundColor: 'background',
                borderRadius: '4em',
                color: 'text'
            }}/>
        </Link>
    </div>
) 

export {
    CloseIcon
}