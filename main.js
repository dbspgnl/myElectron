const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
    const window = new BrowserWindow({
        width: 900,
        height: 600,
        icon: "img/icon.ico"
    });
    window.loadFile("index.html");
    win.webContents.openDevTools();
    
    // 커스텀 메뉴 템플릿
    const template = [
        {
            label: "Nomentum",
            submenu: [{role: "about"}, {type: "separator"}, {role: "quit"}],
        },
        {
            label: "🎁",
            submenu: [
                {
                    label: "New Background",
                    click: () => {
                        window.webContents.executeJavaScript(`
                            getBackground();
                        `);
                    }
                }, 
                {type: "separator"}, 
                {
                    label: "Reset Preferences",
                    click: () => {
                        window.webContents.executeJavaScript(`
                            localStorage.clear();
                            window.location.reload();
                        `);
                    }
                }
            ],
        }
    ];

    const customMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(customMenu);
};

app.whenReady().then(() => {
    createWindow();
});
