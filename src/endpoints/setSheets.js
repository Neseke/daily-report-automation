const { google } = require('googleapis');
const sheets = google.sheets('v4');
const getTableData = require('./getTableData');
const { getPendant, baseConfig } = require('../configs/sheetsConfig');

async function setSheets(data, auth) {
   console.log(
      `creating ${data.length + 2} columns and ${data[0].sums.size + 1} rows`
   );

   const request = {
      ...baseConfig,
      range: `A1:${getPendant(data.length + 1)}25`,
      resource: {
         values: getTableData(data),
      },

      auth,
   };

   return await sheets.spreadsheets.values.update(request);
}

module.exports = setSheets;
