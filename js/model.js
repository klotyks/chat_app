const messages = []
const nicknames = []
let currentMessage = ''
let currentNickname
const bannedWords = ['banana','cucumber','tomato']

function addMessage(message) {
  let formattedMessage = message
    ? `[${currentNickname}]: ${message}`
    : `{system} ${currentNickname} joined the chat`
  messages.push(formattedMessage)

}

function currentMessageT(text) {
  currentMessage = text
}


function markedMessage(nickname) {
  if (currentMessage.includes(nickname)) return
  currentMessage = '@' + nickname + ' ' + currentMessage
}

function loginNickname(nickname) {
  if (nickname === '') return
  currentNickname = nickname

  if (nicknames.includes(nickname)) return
  nicknames.push(nickname)
  addMessage()

}

function bannedWordsForChat () {
  
}

// loginNickname('ivan')
// nicknames
// messages
// currentNickname
// addMessage('hi')
// messages
