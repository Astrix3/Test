"use strict";

const endPoint = '/api/event';

const requestMethod = 'GET';

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-*": "*",
    "Access-Control-Allow-Headers": "*",
    "node-cache": "Missed node-cache",
    "Content-Type": "application/json"
};

const success = {
    CODE: 200
};
const invalid = {
    statusCode: 400,
    headers: headers,
    body: JSON.stringify({error: 'invalid ip'})
};
    
const forbidden ={
    statusCode: 403,
    headers: headers,
    body: JSON.stringify({error: 'forbidden'})
};

module.exports.API_END_POINT = endPoint;
module.exports.REQUEST_METHOD = requestMethod;
module.exports.HEADERS = headers;
module.exports.SUCCESS = success;
module.exports.INVALID = invalid;
module.exports.FORBIDDEN = forbidden;