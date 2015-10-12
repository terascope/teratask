/*
 If TeraServer is loaded as a module we can still initialize while giving the app
 finer control over what services are loaded.
 */
var config_schema = require('./system_schema').config_schema;
var _ = require('lodash');

module.exports = function(customConfig) {
    var worker = require('./lib/worker');
    var master = require('./lib/master');

    var config = {
        name: 'teratask',
        redis: ['default', 'immediate'],
        worker: worker,
        master: master,
        config_schema: config_schema
    };

    _.merge(config, customConfig);

    var foundation = require('terafoundation')(config);
};