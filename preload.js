const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openFile: () => ipcRenderer.invoke('open-file'),
    openDirectory : ()=> ipcRenderer.invoke('open-directory'),
    lerArquivo: (caminho) => {return ipcRenderer.invoke('ler-arquivo', caminho)}
});