const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path')

let chatWindow; // Declare chatWindow globally
function createHomeWindow() {
  chatWindow = new BrowserWindow({
    width: 445,
    height: 740,
    x: 1050,
    y: 5,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,
    alwaysOnTop: true
  })
  
  chatWindow.loadFile('chat.html')
}

async function fetchResponse(data, isvoice) {
  console.log("fetch response called")
  var dataToSend = { 'query': data, }
  await fetch('http://127.0.0.1:1000/ai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  }).then((r) => r.json())
  .then((data) => {
    console.log(data['response'])
    if (isvoice) {
      // Assuming 'voiceWindow' is defined elsewhere
      voiceWindow.webContents.send('pixel', { 'pixel': data['response'] })
      requestSay(data['response'], false) // Assuming 'requestSay' is defined elsewhere
    } else {
      chatWindow.webContents.send('response', { 'pixel': data['response'], })
    }
  }).catch(error => {
    console.log(error);
  });
}

const undoChanges = async() => {
  const response=await fetch('http:/127.0.0.1:1000/undo',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
  console.log("Undo done");
  

}
async function fetchChatData(text) {
  console.log("fetching chat new data", text)
  dataToSend = { 'text': text };
  await fetch('http://127.0.0.1:1000/start/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  }).then(res => res.json())
  .then((data) => {
    console.log(data['response'])
    chatWindow.webContents.send('response', { 'pixel': data['response'], 'isNews': 'no', })
  })
  .catch(error => {
    console.error('Fetch error:', error.message);
  });
}

ipcMain.on('userChat', async (e, data) => {
  if(data.isText)
    {
      await fetchChatData(data.query);
      console.log("accepted");
      return
  }
  else {
    if(!data.isAccepted)
    undoChanges()
  }
  })
  

  app.whenReady().then(() => {
    createHomeWindow()
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createHomeWindow()
      })
  })
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
    })