'use strict';

module.exports.hello = async (event) => {
  const DynamoDbCRUDHelpers = require('../../helpers/DynamoDbCRUDHelpers.js');
  console.log("Requst event: ", event);
  return DynamoDbCRUDHelpers.buildResponse(200, "API Status is live");;
};