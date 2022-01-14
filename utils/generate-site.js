const fs = require('fs');

// writes the template literal from generatePage to the index.HTML file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: `
        ================================================================
        Team Profile Page Created: http://127.0.0.1:5500/dist/index.html
        ================================================================
        `
      });
    });
  });
};
// export the ability to write a file to the file system
module.exports = writeFile