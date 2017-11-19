const _ = require('lodash');
const config = require('./config.json');

/**
 * formats placeholder and returns final string
 * @param {*} value 
 */
const formatKey = function (value) {
    const formattedKey = _.chain(value).replace('@', '').snakeCase().toUpper().value();
    if (!process.env[formattedKey]) {
        throw new Error (`ENV VAR "${formattedKey}" NOT SET`);
    }
    return process.env[formattedKey];
}

/**
 * parse config object and replace placeholder with values from env var
 * @param {*} configObject 
 */
function parseConfig(configObject) {
    return _.mapValues(configObject, (value, key) => {
        if (_.isString(value) && value.startsWith('@')) {
            return formatKey(value);
        }

        if(_.isObject(value)) {
            return parseConfig(value);
        }
        return value;
    });
}

module.exports = parseConfig(config);