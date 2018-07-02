const { google } = require('googleapis');

async function updateAppsScript(auth) {
   const script = google.script({ version: 'v1', auth });

   const scriptId = '1_NylWsY-PoGfi2IzJWBiS56l7q5mo2z23b-tbnPxMmqOos-ayBJvk28K';

   const project = await script.projects.get({ auth, scriptId });

   const source = `
    function helloYou() {
      Logger.log('There must be a way');
    }
  `;

   const resource = {
      files: [
         {
            name: 'appsscript',
            type: 'JSON',
            source:
               '{"timeZone":"America/New_York","exceptionLogging":' +
               '"CLOUD"}',
         },
         {
            name: 'hello',
            type: 'SERVER_JS',
            source,
         },
      ],
   };

   script.projects.updateContent(
      { scriptId, auth, resource },
      {},
      (error, data) => {
         if (error) console.log(error);
         else {
            console.log(data);
         }
      }
   );
}

module.exports = updateAppsScript;
