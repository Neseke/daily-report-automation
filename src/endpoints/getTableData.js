function getTableData(data) {
   const names = data.map(account => account.name);
   const sums = data.map(account => Array.from(account.sums));

   console.log(data);

   const views = sums.reduce(
      (acc, set) => {
         acc.push(set[0][1]);
         return acc;
      },
      ['views']
   );

   const watchTime = sums.reduce(
      (acc, set) => {
         acc.push(set[1][1]);
         return acc;
      },
      ['watchTime']
   );

   const subscribersGained = sums.reduce(
      (acc, set) => {
         acc.push(set[2][1]);
         return acc;
      },
      ['subscribersGained']
   );

   const header = ['', ...names];
   const body = [views, watchTime, subscribersGained];

   return [header, ...body];
}

module.exports = getTableData;
