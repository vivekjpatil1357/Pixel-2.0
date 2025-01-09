
window.chat.receivePixelResponse((e, data) => {
  var messageList = document.getElementById('message-list');
  var newMessage = document.createElement('div');
  newMessage.className = 'bot';
  newMessage.innerHTML = '<strong>Pixel 2.0:</strong><p>' + data['pixel'] + '</p>';
  messageList.appendChild(newMessage);
  if (data['isNews'] === 'yes') {
    newMessage = document.createElement('img');
    newMessage.src = data['imageUrl'];
    newMessage.className = 'bot';
    messageList.appendChild(newMessage);
  }
  scrollToBottom();
  const isAccepted = confirm("Accept Changes?")
  window.chat.sendUserChat({ isText:false,isAccepted })
});