/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import Layout from "../components/layout"
import LayoutSidebarContent from '../components/layout-sidebar-content'
import CTA from '../components/cta'
import Logo from '../components/logo'
import Footer from '../components/footer'
import { basename } from 'path';
import {Link} from 'gatsby'

import ServiceUI from '../components/text-extract-ui'

const IndexPage = () => (
  <div>
      <Layout>
        <LayoutSidebarContent>
            <div sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div sx={{
                display:'flex',
                flexDirection:'column'
              }}>
                <Logo/>
                <div sx={{
                  backgroundColor: 'base',
                  color: 'textDark',
                  padding: 3,
                  borderRadius: '0.4em'
                }}>
                  <h1>Services</h1>
                  <h4> List of our publicly available tools </h4>
                  <p> Keep checking this space for our newly available tools.</p>
                  {/* <CTA/> */}
                </div>
                </div>
                <Footer/>
            </div>
            <div>
              <h2> Links </h2>
              <Link to="text-extract"> Text Extract </Link>
              <Link to="fact-check-search"> Search </Link>
            </div>
        </LayoutSidebarContent>
      </Layout>
  </div>
)

export default IndexPage
