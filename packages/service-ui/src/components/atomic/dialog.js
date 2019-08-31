/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

const Dialog = (props)=>{
    return(
        <div sx={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: 3,
            width: '100vw',
            height: '100vh',
            display: 'flex'
        }}>
            <div sx={{
                margin: 'auto',
                width: 'modal',
                px: 3,
                py: 3,
                backgroundColor: 'indigo.0',
                boxShadow: `0px 0px 5px`,
                color: 'indigo.1'
            }}> 
                <div sx={{
                    color: 'text'
                }}>

                    <h3>Title </h3>
                    <p> Mauris blandit libero nec velit vehicula, quis gravida felis efficitur. Integer libero erat, euismod non tempus at, cursus quis metus. </p>
                    <div sx={{
                        display: 'flex'
                    }}>
                        <button sx={{
                            p: 2,
                            borderColor: 'indigo.2',
                            backgroundColor: 'indigo.1',
                            marginRight: '2'
                        }}> OK </button>

                        <button sx={{
                            p: 2,
                            borderColor: 'indigo.2',
                            backgroundColor: 'indigo.1'
                        }}> Cancel </button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Dialog