/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import {keyframes} from 'emotion'
import {useSelector} from 'react-redux'

const Loader = (props) => {
    const sway = keyframes`
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    `
    const ballStyle = {
        backgroundColor: 'indigo.8',
        width: '8px',
        height: '8px',
        marginRight:1,
        animation: `${sway} 1s ease infinite`
    }

    const loading = useSelector(state=>state.loading)

    return(        
        loading.state==='loading'?
        <div sx={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: 5,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            backgroundColor: 'indigoOverlay.0'
        }}>
            <div sx={{
                margin: 'auto',
                width: 'modal',
                px: 3,
                py: 3,
            }}> 
                <div sx={{
                    display: 'flex'
                }}>
                    <div sx={ballStyle}></div>
                    <div sx={ballStyle}></div>
                    <div sx={ballStyle}></div>
                </div>
            </div>
        </div>
        :
        null
    )
}

export default Loader