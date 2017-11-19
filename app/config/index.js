const _ = require('lodash');
const config = require('./config.json');

/**
 * parse config object and replace placeholder with values from env var
 * @param {*} configObject 
 */
function parseConfig(configObject) {
    return _.mapValues(configObject, (value, key) => {
        if (_.isString(value) && value.startsWith('@')) {
            const formattedKey = _.chain(value)
                .replace('@', '')
                .snakeCase()
                .toUpper()
                .value();

            if (!process.env[formattedKey]) {
                throw new Error (`ENV VAR "${formattedKey}" NOT SET`);
            }
            return process.env[formattedKey];
        }
        return value;
    });
}

module.exports = parseConfig(config);