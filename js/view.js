function renderChat(messages) {
  const elChatFlow = document.querySelector('.chat-flow')
  elChatFlow.innerHTML = ''
  for (const message of messages) {
    const elDivSystemeM = generateMessage(message)
    elChatFlow.appendChild(elDivSystemeM)
  }
}

function renderInput(text) {
  const elInputText = document.querySelector('#input_msg')
  elInputText.value = text

}

function onClickSpan(e) {
  const text = e.target.textContent
  const message = elInputText.value
  currentMessageT(message)
  handleMarkedMessage(text)

}


function onKeyPressSendMessage(e) {
  if (e.key !== 'Enter') return
  onClickButtonSendMessage()
}

function onKeyPressLogin(e) {
  if (e.key !== 'Enter') return
  onClickButtonAddNickname()
  const elInput = document.querySelector('#chk_sm')
  elInput.checked = true
}


function generateMessage(message) {
 
  const elDivSystemeM = document.createElement('div')
 
  const elI = document.createElement('i')

  elI.textContent = message

  elDivSystemeM.classList.add('system-message')
 
  elDivSystemeM.appendChild(elI)
  
  return elDivSystemeM

}

function onClickButtonSendMessage() {
  const elInputText = document.querySelector('#input_msg')
  const message = elInputText.value
  handleAddMessage(message)
  // onKeyPressSendMessage(message)
  elInputText.value = ''
}

function onInputMesssage(e) {
  const text = e.target.value
  currentMessageT(text)
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

const elInputLogin = document.querySelector('#input_nickname')
elInputLogin.onkeypress = onKeyPressLogin

const elInputText = document.querySelector('#input_msg')
elInputText.oninput = onInputMesssage