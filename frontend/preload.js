const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('chat', {
    sendUserChat: (data) => ipcRenderer.send('userChat', data),
    receivePixelResponse: (callback) => ipcRenderer.on('response', callback),
    // backFromChat:()=>ipcRenderer.send('backFromChat')
})
