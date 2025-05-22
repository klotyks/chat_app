const messages = []
const nicknames = []
let currentNickname

// function addMessage(message) {
//   const nicknameMessage = '[' + currentNickname + ']: ' + message
//   const systemMessage = '{system} ' + currentNickname + ' joined the chat'
//   if (message) {
//     messages.push(nicknameMessage)
//   } else {
//     messages.push(systemMessage)
//   }
// }
// function addMessage(message) {
//   let formattedMessage
//   if (message) {
//     formattedMessage = `[${currentNickname}]: ${message}`
//   } else {
//     formattedMessage = `{system} ${currentNickname} joined the chat`
//   }
//   messages.push(formattedMessage)
// }
function addMessage(message) {
  let formattedMessage = message
    ? `[${currentNickname}]: ${message}`
    : `{system} ${currentNickname} joined the chat`
  messages.push(formattedMessage)
}

function loginNickname(nickname) {
  if (nickname === '') return
  currentNickname = nickname

  // if (true) return

  nicknames.push(nickname)

  addMessage()
}

loginNickname('ivan')
loginNickname('ivan')
nicknames
messages
currentNickname
addMessage('hi')
messages
