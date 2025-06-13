const bannedWords = ["banana", "cucumber", "tomato", "https://"];
const messages = [];
const nicknames = [];
let currentMessage = "";
let currentNickname;
let lastMessage = "";
let lastMessageTime = {};

function addMessage() {
  const currentTime = Date.now();
  const timeSinceLastMessage = lastMessageTime[currentNickname]
    ? (currentTime - lastMessageTime[currentNickname]) / 1000
    : Infinity;
  if (timeSinceLastMessage < 3) {
    console.log(`Ожидание: ${Math.ceil( 3 - timeSinceLastMessage )} секунд перед следующей отправкой.`);
    messages.push(`[Система] Ожидание: ${Math.ceil( 3 - timeSinceLastMessage )} секунд перед следующей отправкой.`);
    return;
  }

  if (currentMessage === "") return;

  let formattedMessage = currentMessage
    ? `[${currentNickname}]: ${currentMessage}`
    : `{system} ${currentNickname} joined the chat`;
  if (isBadMessage(formattedMessage)) return;
  if (formattedMessage === lastMessage) return;
  // if(forbiddenPhraseFunc(formattedMessage)) return
  messages.push(formattedMessage);
  lastMessage = formattedMessage;
  lastMessageTime[currentNickname] = currentTime;
  currentMessage = "";
}

function setCurrentMessage(message) {
  currentMessage = message;
}

function markedMessage(nickname) {
  // if (currentMessage.includes(currentNickname)) return

  if (currentMessage.includes("@")) {
    currentMessage;
    const idx = currentMessage.indexOf(" ");
    idx;
    currentMessage = currentMessage.slice(idx + 1);
    currentMessage;
  }
  currentMessage = "@" + nickname + " " + currentMessage;
}

function loginNickname(nickname) {
  if (nickname === "") return;
  currentNickname = nickname;

  if (nicknames.includes(nickname)) return;
  nicknames.push(nickname);
  currentMessage = undefined;
  addMessage();
}

function isBadMessage(message) {
  for (const bannedWord of bannedWords) {
    bannedWord;
    if (message.includes(bannedWord)) return message.includes(bannedWord);
  }
  return false;
}



console.log(isBadMessage("hello im tomato"));

loginNickname("ivan");
loginNickname("roman");
nicknames;
setCurrentMessage("foo");
currentMessage;
markedMessage("roman");
currentMessage;
markedMessage("ivan");
currentMessage;
console.log('Last message:', lastMessage); // Проверка последнего сообщения
setTimeout(() => {
    setCurrentMessage('Еще одно сообщение');
    addMessage(); // Будет заблокировано, если меньше 3 секунд
}, 2000);
setTimeout(() => {
    setCurrentMessage('Теперь можно');
    addMessage(); // Разрешено после 3 секунд
}, 4000);