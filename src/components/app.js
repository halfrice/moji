import React from "react"
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1440px;
  padding: 20px;
`
const MessageTextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  min-height: 100px;
`
const SendButton = styled.button`
  margin-top: 20px;
`
const CurrentMessage = styled.div`
  margin-top: 20px;
`

class App extends React.Component {
  state = {
    textAreaValue: "",
    message: "",
  }

  handleTextAreaChange = event => {
    this.setState({ textAreaValue: event.target.value })
  }

  sendMessage = () => {
    this.setState({ message: this.state.textAreaValue })
  }

  render() {
    return (
      <AppContainer>
        <h2>App</h2>
        <MessageTextArea
          type="text"
          onChange={this.handleTextAreaChange}
          value={this.state.textAreaValue}
          placeholder="Enter message"
        ></MessageTextArea>
        <SendButton onClick={this.sendMessage}>Enter</SendButton>
        <CurrentMessage>Sent Message: {this.state.message}</CurrentMessage>
      </AppContainer>
    )
  }
}

export default App
