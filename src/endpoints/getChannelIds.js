const { google } = require('googleapis');

const channelsConfig = require('../configs/channelsConfig');

const youtubeDataApi = google.youtube('v3');

let channelIds = [],
   i = 1;

async function getChannelIds(auth, onBehalfOfContentOwner, pageToken) {
   const config = {
      ...channelsConfig,
      auth,
      pageToken,
      onBehalfOfContentOwner,
   };

   const channels = await youtubeDataApi.channels.list(config);

   const channelIdsOnThisPage = channels.data.items.map(item => item.id);

   channelIds = [...channelIds, ...channelIdsOnThisPage];

   if (channels.data.nextPageToken) {
      console.log(
         `${i} of ${parseInt(247 / channelsConfig.maxResults, 10)} pages`
      );
      i += 1;
      return await getChannelIds(
         auth,
         onBehalfOfContentOwner,
         channels.data.nextPageToken
      );
   } else {
      console.log(`found ${channelIds.length} channel ids`);
      return channelIds;
   }
}

module.exports = getChannelIds;
