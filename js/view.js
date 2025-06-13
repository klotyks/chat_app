function onClickSpan(e) {
  const nickname = e.target.textContent
  handleMarkedMessage(nickname)
}

function onRightClick (e) {
  e.preventDefault()
  handleRightClick(e.target.textContent)
}
function onInputMesssage(e) {
  const message = e.target.value
  handleSetMessage(message)
}
function onKeyPressSendMessage(e) {
  if (e.key !== 'Enter') return
  handleAddMessage()
}
function onKeyPressLogin(e) {
  if (e.key !== 'Enter') return
  onClickButtonAddNickname()
  const elInput = document.querySelector('#chk_sm')
  elInput.checked = true
}
function onClickButtonSendMessage() {
  handleAddMessage()
}
function onClickButtonAddNickname() {
  const elInputNickname = document.querySelector('#input_nickname')
  const nickname = elInputNickname.value
  handleAddNickname(nickname)
  renderChat(messages)
}

function renderChat(messages) {
  const elChatFlow = document.querySelector('.chat-flow')
  elChatFlow.innerHTML = ''
  for (const message of messages) {
    const elDivSystemeM = generateMessage(message)
    elChatFlow.appendChild(elDivSystemeM)
  }
}
function renderInputMessage(message) {
  const elInputText = document.querySelector('#input_msg')
  elInputText.value = message
}
function renderNicknameList(nicknames,currentNickname) {
  let isCurrent
  const elNickname = document.querySelector('.nickname-list')
  elNickname.innerHTML = ''
  for (const nickname of nicknames) {
    if(nickname === currentNickname) isCurrent = true
     else isCurrent = false
    const elNickNameList = generateNickname(nickname,isCurrent)
    elNickname.appendChild(elNickNameList)
  }
}
function generateMessage(message) {
  const elDivSystemeM = document.createElement('div')
  const elI = document.createElement('i')
  elI.textContent = message
  elDivSystemeM.classList.add('system-message')
  elDivSystemeM.appendChild(elI)
  return elDivSystemeM
}
function generateNickname(nickname,isCurrent) {
  const elDivWrapSpan = document.createElement('div')
  const elSpan = document.createElement('span')
  elSpan.textContent = nickname
  if(isCurrent){
    elSpan.classList.add('current-nickname')
  }
  elDivWrapSpan.classList.add('wrap-span')
  elDivWrapSpan.appendChild(elSpan)
  elSpan.onclick = onClickSpan
  elSpan.oncontextmenu = onRightClick
  return elDivWrapSpan
}

const elLabelButton = document.querySelector('#btn_enter')
const elInputSend = document.querySelector('#btn_send_msg')
const elInputMessage = document.querySelector('#input_msg')
const elInputLogin = document.querySelector('#input_nickname')
const elInputText = document.querySelector('#input_msg')

elLabelButton.onclick = onClickButtonAddNickname
elInputSend.onclick = onClickButtonSendMessage
elInputMessage.onkeypress = onKeyPressSendMessage
elInputLogin.onkeypress = onKeyPressLogin
elInputText.oninput = onInputMesssage
