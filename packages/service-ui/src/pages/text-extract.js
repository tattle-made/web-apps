/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import Layout from "../components/layout"
import LayoutSidebarContent from '../components/layout-sidebar-content'
import CTA from '../components/cta'
import Logo from '../components/logo'
import Footer from '../components/footer'
import { basename } from 'path';

import ServiceUI from '../components/text-extract-ui'

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
                  <h1>Text-Extractor</h1>
                  <h4> Extract text from memes </h4>
                  <p> This tool automates extraction of text from memes</p>
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
