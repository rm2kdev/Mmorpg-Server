/**
 * Created by rm2kdev on 27/11/2014.
 */
//Import required libraries
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//Store the environment variable
var environment = args.env || "test";

//Common config... ie: name, version, max player etc...
var common_conf = {
    name: "rm2kdevs mmo game server",
    version: "0.0.1",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "\\Game Data\\" + "Items\\",
        maps: __dirname + "\\Game Data\\" + "Maps\\"
    },
    starting_zone: "rm_map_home"
};

//Environment Specific Configuration
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database: "mongodb://127.0.0.1/rm2mmo_prod"
    },

    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "mongodb://127.0.0.1/rm2mmo_test"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];

