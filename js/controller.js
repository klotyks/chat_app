function handleAddMessage(message) {
  addMessage(message)
  renderChat(messages)
}

function handleAddNickname(nickname) {
  loginNickname(nickname)
  renderNicknameList(nicknames)
}

function handleOnKeyPressAdd(message) {
  addMessage(message)
  renderChat(messages)
}

function handleMarkedMessage (text) {
  markedMessage(text)
  renderInput(currentMessage)
}