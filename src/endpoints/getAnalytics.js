const { google } = require('googleapis');

const youtubeAnalytics = google.youtubeAnalytics('v1beta1');

const analyticsConfig = require('../configs/analyticsConfig');

async function getAnalytics(auth, channelIds, ids, config = analyticsConfig) {
   const results = channelIds.map(async id => {
      const filters = `channel==${id}`;

      return await youtubeAnalytics.reports.query({
         ...config, // e.g.  start-date, end-date, ...
         ids: `contentOwner==${ids}`,
         filters,
         auth,
      });
   });

   return Promise.all(results);
}

module.exports = getAnalytics;
