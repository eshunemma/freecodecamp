const path = require('path');
// return your platform specific seperator
console.log(path.sep)

// join method joins sequence of path segments using platforms specific seperator 
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//prints the last file in a directory 
const base = path.basename(filePath);
console.log(base);

//returns an absolute path(full path where application is running)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);