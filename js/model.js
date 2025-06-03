const bannedWords = ['banana', 'cucumber', 'tomato']
const messages = []
const nicknames = []
let currentMessage = ''
let currentNickname

function addMessage() {
  if (currentMessage === '') return
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
  // if (currentMessage.includes(currentNickname)) return

  if (currentMessage.includes('@')) {
    currentMessage
    const idx = currentMessage.indexOf(' ')
    idx
    currentMessage = currentMessage.slice(idx + 1)
    currentMessage
  }
  currentMessage = '@' + nickname + ' ' + currentMessage
}

function loginNickname(nickname) {
  if (nickname === '') return
  currentNickname = nickname

  if (nicknames.includes(nickname)) return
  nicknames.push(nickname)
  currentMessage = undefined
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
loginNickname('roman')
nicknames
setCurrentMessage('foo')
currentMessage
markedMessage('roman')
currentMessage
markedMessage('ivan')
currentMessage
