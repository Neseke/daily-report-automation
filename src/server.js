var cron = require('node-cron');
const { exec } = require('child_process');

function runScript() {
   exec('npm run dryRun', (error, stdout) => console.log(stdout));
}

cron.schedule('*/30 * * * * *', runScript, null, true, 'Europe/Berlin');
// cron.schedule('00 01 15 * * *', runScript, null, true, 'Europe/Berlin');
