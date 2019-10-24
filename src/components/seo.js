import React from "react"
import Helmet from "react-helmet"
import favicon from "../images/icons/favicon.ico"

const Seo = () => {
  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">
        Moji App
      </title>
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
  )
}

export default Seo
