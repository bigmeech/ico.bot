const _ = require('lodash');
const config = require('./config.json');

/**
 * parse config object and replace placeholder with values from env var
 * @param {*} configObject 
 */
function parseConfig(configObject) {
    return _.map(configObject, (value, key) => {
        console.log(value, key);
    });
}

module.exports = parseConfig(config);