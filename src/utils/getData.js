const getAnalytics = require('../endpoints/getAnalytics');
const getChannelIds = require('../endpoints/getChannelIds');
const { contentOwnerAccounts } = require('../configs/contentOwnerConfig');
const getSums = require('./getSums');

async function getData(auth) {
   const sums = contentOwnerAccounts.map(async ({ name, contentOwnerId }) => {
      const channelIds = await getChannelIds(auth, contentOwnerId);

      const analytics = await getAnalytics(auth, channelIds, contentOwnerId);

      return { name, sums: getSums(analytics) };
   });

   return await Promise.all(sums);
}

module.exports = getData;
