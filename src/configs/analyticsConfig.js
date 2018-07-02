const { metrics } = require('./contentOwnerConfig');

const analyticsConfig = {
   'start-date': '2018-02-01',
   'end-date': '2018-02-28',
   metrics: metrics.join(','),
   dimensions: 'day',
};

module.exports = analyticsConfig;
