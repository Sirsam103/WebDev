const fs = require('fs');
const os = require('os');

const hostname = os.hostname();
const platform = os.platform();
const cpus = JSON.stringify(os.cpus(), null, 2);

const data = `
Hostname: ${hostname}
Platform: ${platform}
CPUs: ${cpus}
`;

fs.writeFile('output.txt', data, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('OS data written to output.txt');
    }
});
