import React from "react"
import styled from "styled-components"
import "emoji-mart/css/emoji-mart.css"
import data from "emoji-mart/data/messenger.json"
import { NimblePicker, Emoji } from "emoji-mart"
import { device, mixins } from "~styles"

const AppContainer = styled.div`
  ${mixins.flex.center};
  flex-direction: column;
  max-width: 1440px;
  padding: 20px;
`
const EmojiContainer = styled.div``
const MessageTextArea = styled.textarea`
  width: 100%;
  border: 1px solid #a4bdde;
  border-radius: 6px;
  max-width: 600px;
  min-height: 150px;
  margin-top: 20px;
  background-color: transparent;
  font-size: 24px;
  color: #a4bdde;
`
const PickerContainer = styled.div`
  padding: 0px;
`
const SendButton = styled.div`
  border: 1px solid yellowgreen;
  border-radius: 6px;
  margin: 20px 0;
  padding: 0.75rem 1.25rem;
  background-color: transparent;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: #404144;
  }
`

class App extends React.Component {
  state = {
    textAreaValue: "",
    message: "",
    selectedEmoji: "grin",
  }

  handleTextAreaChange = event => {
    this.setState({ textAreaValue: event.target.value })
  }

  sendMessage = () => {
    this.setState({ message: this.state.textAreaValue }, () => {
      console.log("Sending message: " + this.state.message)
    })
  }

  handleEmojiSelect = emoji => {
    this.setState({
      selectedEmoji: emoji.short_names[0] ? emoji.short_names[0] : emoji.id,
      textAreaValue: this.state.textAreaValue + emoji.native,
    })
  }

  render() {
    return (
      <AppContainer>
        <EmojiContainer>
          <Emoji
            emoji={this.state.selectedEmoji}
            fallback={(emoji, props) => {
              return emoji ? `:${emoji.short_names[0]}:` : props.emoji
            }}
            set={"apple"}
            sheetSize={64}
            size={256}
          />
        </EmojiContainer>
        <MessageTextArea
          type="text"
          onChange={this.handleTextAreaChange}
          value={this.state.textAreaValue}
          placeholder="Enter message"
        ></MessageTextArea>
        <PickerContainer>
          <NimblePicker
            data={data}
            emoji="grin"
            onSelect={this.handleEmojiSelect}
            set="apple"
            sheetSize={64}
            title="Moji"
          />
        </PickerContainer>
        <SendButton onClick={this.sendMessage}>Send</SendButton>
      </AppContainer>
    )
  }
}

export default App
