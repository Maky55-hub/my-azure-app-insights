let viewConfig = require('./config/view');
let errorConfig = require('./config/error');
let utilitiesConfig = require('./config/utilities');
let routesConfig = require('./config/routes');
let Sequelize = require('sequelize');

let express = require('express');
let process = require('process');

let appInsights = require("applicationinsights");
appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(true)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
    .start();

let app = express();

viewConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;
