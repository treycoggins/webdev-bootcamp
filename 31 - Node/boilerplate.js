// fs is not in scope by default
// fs must be 'required'

const fs = require('fs');

const folderName = process.argv[2] || 'Project';

// Asynchronous version

// fs.mkdir('MyFolder', { recursive: true }, err => {

//   console.log("IN THE CALLBACK!")
//   if (err) throw err;
// });
// console.log("I COME AFTER MKDIR IN THE FILE!")


// Synchronous version

try {
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
  console.log("SOMETHING WENT WRONG")
  console.log(e);
}


/// This application can be run from any directory