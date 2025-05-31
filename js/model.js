const bannedWords = ['banana', 'cucumber', 'tomato']
const messages = []
const nicknames = []
let currentMessage = ''
let currentNickname

function addMessage() {
  let formattedMessage = currentMessage
    ? `[${currentNickname}]: ${currentMessage}`
    : `{system} ${currentNickname} joined the chat`
  if (isBadMessage(formattedMessage)) return
  messages.push(formattedMessage)
  currentMessage = ''
}

function setCurrentMessage(message) {
  currentMessage = message
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

function isBadMessage(message) {
  for (const bannedWord of bannedWords) {
    bannedWord
    if (message.includes(bannedWord)) return message.includes(bannedWord)
  }
  return false
}

console.log(isBadMessage('hello im tomato'))

loginNickname('ivan')
nicknames
messages
currentNickname
currentMessage
addMessage()
messages
currentMessage
