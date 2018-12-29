// Using this file as .js entry point
process.env.TS_NODE_FILES = true;
require("ts-node").register();

exports.config = require("./default.conf").config;
