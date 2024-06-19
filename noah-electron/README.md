# Noah
The training application for Ghana's Ark Foundation team on website maintenance. 

### Features
Noah uses cards to visually represent tutorials that are stored as text in a JSON file, which are dynamically shown on screen. When the cards are clicked, a modal appears with all the information in the tutorial and any images included as well. There are card categories, navigable using the tabs at the top right of the screen. Currently there are two categories: cPanel and WordPress, which have their own colors for tutorial cards. 

### How to Install
Navigate to packages, and download the Noah-Setup-X.X.X.exe. Run it, and you're good to go!

### Development
This is an Electron app running React and TailwindCSS.

To get started, clone the repo and navigate to "noah-electron". Open the terminal and run the command:    
```npm install```      
to ensure all dependencies are installed.     

Then, run:     
```npm run electron-react```     
This will start the development environment.   

After exiting out of the Electron window, be sure to press Ctrl+C to exit the development environment and return to the terminal.

### Packaging
Navigate to the project root and run the terminal as administrator. If using PowerShell, use the command ```$env:GITHUB_ACCESS_TOKEN="your_token_here"```. If using Command Prompt, use ```set GITHUB_ACCESS_TOKEN=your_token_here```.   

To package:   
```npm run package```
To publish:   
```npm run publish```