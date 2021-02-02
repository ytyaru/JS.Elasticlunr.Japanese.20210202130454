import FileSearcher from './fle/file.js';
window.addEventListener('load', (event) => {
    for (let file of FileSearcher.gets('./content/**/*')) {
        console.log(file);
    }
});
