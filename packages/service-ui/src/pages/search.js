/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import Layout from "../components/layout"
import LayoutSidebarContent from '../components/layout-sidebar-content'
import CTA from '../components/cta'
import Logo from '../components/logo'
import Footer from '../components/footer'
import { basename } from 'path';

import ServiceUI from '../components/search-ui'

const TextExtractPage = () => (
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
                  <h1> Search</h1>
                  <h4> Search for posts </h4>
                  <p> A reliable way to accurately search for previously added posts.</p>
                  <CTA/>
                </div>
                </div>
                <Footer/>
            </div>
            <ServiceUI/>
        </LayoutSidebarContent>
      </Layout>
  </div>
)

export default TextExtractPage
