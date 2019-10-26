import React from "react"
import PropTypes from "prop-types"
import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Seo />
      <div>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
