const messages = []
const nicknames = []

function addMessage(message) {
  const addNicknameMessage = '[' + currentNickname + ']' + ':' + message
  if (message === '') return
  messages.push(addNicknameMessage)
}

let currentNickname

function nickNameRemember(nickname) {
  if (nickname === '') return
  currentNickname = nickname
}

function loginNickname(nickname) {
  const systemMessage = '{system}' + ' ' + nickname + ' ' + 'joined the chat'
  if (nickname === '') return
  nicknames.push(nickname)
  messages.push(systemMessage)
  nickNameRemember(nickname)
}


// loginNickname('ivan')
// nicknames
// messages
// currentNickname
// addMessage('hi')
// messages