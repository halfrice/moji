import React from "react"
import styled from "styled-components"
import { mixins } from "~styles"

const CanvasContainer = styled.div`
  ${mixins.flex.center};
  flex-direction: column;
`

const Canvas = () => {
  return (
    <CanvasContainer>
      <h2>Canvas</h2>
    </CanvasContainer>
  )
}

export default Canvas
