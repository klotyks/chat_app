function handleAddMessage() {
  addMessage()
  renderChat(messages)
  renderInputMessage(message)
}

function handleAddNickname(nickname) {
  loginNickname(nickname)
  renderNicknameList(nicknames)
}

function handleMarkedMessage(text) {
  markedMessage(text)
  renderInputMessage(currentMessage)
}

function handleSetMessage(message) {
  setCurrentMessage(message)
  // renderInputMessage(currentMessage)
}
