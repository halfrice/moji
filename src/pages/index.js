import React from "react"
import styled from "styled-components"
import { App, Canvas, Layout } from "~components"

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
