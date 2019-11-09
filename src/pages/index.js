import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Canvas from "../components/canvas"
import App from "../components/app"

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`

export default () => (
  <Layout>
    <MainContainer>
      {/* <Canvas /> */}
      <App />
    </MainContainer>
  </Layout>
)
