import React from 'react'

const Content = (props) => (
    <div className="content">
        <div className="main">{props.children[0]}</div>
        <div className="side">{props.children[1]}</div>
    </div>
)

export default Content;