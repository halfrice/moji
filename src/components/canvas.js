import React from "react"
import styled from "styled-components"

const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Canvas = () => {
  return (
    <CanvasContainer>
      <h2>Canvas</h2>
    </CanvasContainer>
  )
}

export default Canvas
