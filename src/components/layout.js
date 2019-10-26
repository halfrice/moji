import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Seo from "./seo"

const Root = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Root id="root">
      <Seo />
      <div>{children}</div>
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
