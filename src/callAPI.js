const getData = require('./utils/getData');
const setSheets = require('./endpoints/setSheets');

async function callAPI(auth) {
   try {
      const data = await getData(auth);
      const response = await setSheets(data, auth);
      console.log(`server responded with ${response.statusText}`);
   } catch (error) {
      console.error('there was an error');
   }
}

module.exports = callAPI;
