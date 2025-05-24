function renderChat(messages) {
  const elChatFlow = document.querySelector('.chat-flow')
  elChatFlow.innerHTML = ''
  for (const message of messages) {
    const elDivSystemeM = generateMessage(message)
    elChatFlow.appendChild(elDivSystemeM)
  }
}

// function renderInput(text) {
//   const elInputText = document.querySelector('#input_msg')
//   elInputText.value = '@' + text

// }

function onClickSpan (e) {
  const text = e.target.textContent
  handleMarkedMessage(text)
}


function onKeyPressSendMessage(e) {
  if (e.key !== 'Enter') return
  onClickButtonSendMessage()
}



function generateMessage(message) {
  // const elDivChatFLow = document.createElement('div')
  const elDivSystemeM = document.createElement('div')
  // const elDivNormalM = document.createElement('div')
  const elI = document.createElement('i')
  // const elSpan = document.createElement('span')


  elI.textContent = message
  // elSpan.textContent = message

  // elDivChatFLow.classList.add('chat-flow')
  elDivSystemeM.classList.add('system-message')
  // elDivNormalM.classList.add('normal-message')
  // elSpan.classList.add('msg-line')

  // elDivChatFLow.appendChild(elDivSystemeM)
  // elDivChatFLow.appendChild(elDivNormalM)
  elDivSystemeM.appendChild(elI)
  // elDivNormalM.appendChild(elSpan)

  return elDivSystemeM

}

function onClickButtonSendMessage() {
  const elInputText = document.querySelector('#input_msg')
  const message = elInputText.value
  handleAddMessage(message)
  // onKeyPressSendMessage(message)
  elInputText.value = ''
}

function renderNicknameList(nicknames) {
  const elNickname = document.querySelector('.nickname-list')
  elNickname.innerHTML = ''
  for (const nickname of nicknames) {
    const elNickNameList = generateNickname(nickname)
    elNickname.appendChild(elNickNameList)
  }
}


function generateNickname(nickname) {
  const elDivWrapSpan = document.createElement('div')
  const elSpan = document.createElement('span')

  elSpan.textContent = nickname

  elDivWrapSpan.classList.add('wrap-span')

  elDivWrapSpan.appendChild(elSpan)

  elSpan.onclick = onClickSpan

  return elDivWrapSpan
}


function onClickButtonAddNickname() {
  const elInputNickname = document.querySelector('#input_nickname')
  const nickname = elInputNickname.value
  handleAddNickname(nickname)
  renderChat(messages)
}

const elLabelButton = document.querySelector('#btn_enter')
elLabelButton.onclick = onClickButtonAddNickname


const elInputSend = document.querySelector('#btn_send_msg')
elInputSend.onclick = onClickButtonSendMessage


const elInputMessage = document.querySelector('#input_msg')
elInputMessage.onkeypress = onKeyPressSendMessage


