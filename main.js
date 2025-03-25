const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs').promises;
const path = require('path');


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.loadURL('http://localhost:5173/')
}

ipcMain.handle('open-file', async ()=> {
  const { canceled, filePaths } = await dialog.showOpenDialog({properties : ['openFile']});
  if (!canceled) {
    console.log(filePaths)
    return filePaths[0];
  }
})

async function buscaFiles(fileUrl) {
  let arquivos = []
  try {
    const files = await fs.readdir(fileUrl); // Correção: chamada correta
    if(files.length > 0) {
      for(let i=0; i<files.length; i++) {
        if(files[i].includes('.')) {
          let obj = {
            nome : files[i],
            type : 'file',
            isClick : false
          }
          arquivos.push(obj)
        } else {
          let obj = {
            nome : files[i],
            type : 'dir',
            filhos : await buscaFiles(fileUrl+'//'+files[i]),
            isClick : false
          }
          arquivos.push(obj)
        } 
      }

    }
    return arquivos
  } catch (err) {
    console.error('Erro ao ler o diretório:', err);
    // return []; // Retorna um array vazio em caso de erro
  }
}

ipcMain.handle('open-directory', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ['openDirectory'] });

  if (!canceled && filePaths.length > 0) {  
    return await buscaFiles(filePaths[0]);
  }
});


app.whenReady().then(createWindow);
