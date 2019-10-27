import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import Seo from "./seo"

import "typeface-open-sans"
import "typeface-source-sans-pro"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Seo />
      <GlobalStyles />
      <div>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
