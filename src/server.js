var cron = require('node-cron');
const { exec } = require('child_process');

function runScript() {
   exec('npm start', (error, stdout) => console.log(stdout));
}

cron.schedule('00 00 14 * * *', runScript(), null, true, 'Europe/Berlin');
