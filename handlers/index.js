'use strict';

const fs = require('fs');
const FILE_NAME = 'visitors.json';
const constants = require('../utils/constants');

const handle = (event) =>{
    const {ip} = event;
    if(ip === null || ip === undefined){
        return constants.INVALID;
    }

    const visitors = fetchVisitors(ip);

    return {
        statusCode: constants.SUCCESS.CODE,
        headers: constants.HEADERS,
        body: JSON.stringify({
            client_ip: ip,
            visit_count: visitors
        }),
      };
};

const fetchVisitors = (ip) =>{
    let rawData = null;
    try{
        rawData = fs.readFileSync(FILE_NAME);
    }
    catch(error){
        rawData = JSON.stringify({});
    }
    let visitors = (rawData) ? JSON.parse(rawData) : {} ;

    visitors[ip] = visitors[ip] ? visitors[ip]+1 : 1;

    const data = JSON.stringify(visitors);
    fs.writeFileSync(FILE_NAME, data);

    return visitors[ip];
}

module.exports.handler = handle;