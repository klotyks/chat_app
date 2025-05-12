const messages = []
const nicknames = []


function addMessage(message) {
  // const memoNick = nickNameRemember(memory)
  const addNicknameMessage = '[' + memory + ']' + ':' + message
  if (message === '') return
  messages.push(addNicknameMessage)

}

let memory

function nickNameRemember(nickname) {
  if (nickname === '') return
  memory = nickname
}



function hasMessageByText(messageText) {
  for (const message of messages) {
    if (message.text === messageText) return true
  }
  return false
}

function getMessageByText(messageText) {
  for (const message of messages) {
    if (message.text === messageText) return message
  }
  return null
}

function loginNickname(nickname) {
  const systemMessage = '{system}' + ' ' + nickname + ' ' + 'joined the chat'
  if (nickname === '') return
  nicknames.push(nickname)
  messages.push(systemMessage)
  nickNameRemember(nickname)
}


loginNickname('ivan')
nicknames
messages
memory
addMessage('hi')
messages