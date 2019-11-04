import React from "react"
import {Layout} from '@tattle-made/ui'
import SectionSearch from '../sections/SectionSearchWhatsappPosts'

const {SimpleLayout} = Layout;

const SecondPage = () => {
  return(
    <SimpleLayout>
        <SectionSearch/>
    </SimpleLayout>
  )
}

export default SecondPage
