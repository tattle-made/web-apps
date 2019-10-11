import React from "react"
import {Layout, Section} from 'ui'
const {LayoutPortal} = Layout;
const {SectionSearchWhatsappPosts} = Section;

const SecondPage = () => {
  return(
    <LayoutPortal
      content={
        <SectionSearchWhatsappPosts/>
      }
    />
  )
}

export default SecondPage
