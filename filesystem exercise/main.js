const fs = require('fs')
const path = require('path');

const commandFilePath = path.join(__dirname, 'command.txt');

function handlerequest(request) {
    let command = request.trim().split(' ');
    let action = command[0];
    let fileName = command[1];
    let newFileName = command.length > 2 ? command[2] : ''
    let content = command.slice(2).join(' ')
    if (action === 'create') {
        fs.writeFileSync(path.join(__dirname, fileName), '');
        console.log(`File "${fileName}" created.`);
    } else if (action === 'delete') {
        fs.unlinkSync(path.join(__dirname, fileName));
        console.log(`File "${fileName}" deleted.`);
    } else if (action === 'rename') {
        fs.renameSync(
            path.join(__dirname, fileName),
            path.join(__dirname, newFileName)
        );
        console.log(`File "${fileName}" renamed to "${newFileName}".`);
    } else if (action === 'add') {
        fs.appendFileSync(path.join(__dirname, fileName), content);
        console.log(`Added "${content}" to file "${fileName}".`);
    } else {
        console.log(`Unknown command: "${request}"`);
    }
}

// Watch for changes in the command.txt file
fs.watchFile(commandFilePath, (curr, prev) => {
    fs.readFile(commandFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading command.txt:', err);
            return;
        }

        const request = data.trim().split('\n');
        request.forEach(handlerequest);
    });
});

console.log('Watching for changes in command.txt...');