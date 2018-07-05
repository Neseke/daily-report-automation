var cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule('*/20 * * * * *', function() {
   console.log('running a task every 40 seconds');
   exec('npm start', (error, stdout) => console.log(stdout));
});
