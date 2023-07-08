'use strict';

module.exports.addproduct = async (event) => {
    const DynamoDbCRUDHelpers = require('../../helpers/DynamoDbCRUDHelpers.js');
    console.log("Requst event: ", event);
    const requestBody = JSON.parse(event.body);
    return await DynamoDbCRUDHelpers.saveProduct(requestBody);
};