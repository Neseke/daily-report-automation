const { metrics } = require('../configs/contentOwnerConfig');

function getSums(analytics) {
   const rows = analytics.map(entry => entry.data.rows);
   const flattenedRows = rows.reduce((acc, val) => acc.concat(val), []);

   // new Map([['views', 0], ['watchTime', 0], ['subscribersGained', 0]])
   let sums = new Map(
      metrics.reduce((acc, metric, index) => {
         acc[index] = [metric, 0];
         return acc;
      }, [])
   );

   flattenedRows.forEach(values => {
      if (values) {
         metrics.forEach((metric, index) => {
            sums.set(metric, sums.get(metric) + values[index + 1]);
         });
      }
   });

   return sums;
}

module.exports = getSums;
