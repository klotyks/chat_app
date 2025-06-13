function handleAddMessage() {
  addMessage()
  renderChat(messages)
  renderInputMessage(currentMessage)
}

function handleAddNickname(nickname) {
  loginNickname(nickname)
  renderNicknameList(nicknames, currentNickname)
}

function handleMarkedMessage(text) {
  markedMessage(text)
  renderInputMessage(currentMessage)
}

function handleSetMessage(message) {
  setCurrentMessage(message)
  // renderInputMessage(currentMessage)
}

function handleRightClick(text) {
  loginNickname(text)
  renderNicknameList(nicknames, currentNickname)
}
