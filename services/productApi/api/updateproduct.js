'use strict';

module.exports.updateproduct = async (event) => {
    const DynamoDbCRUDHelpers = require('../../helpers/DynamoDbCRUDHelpers.js');
    console.log("Requst event: ", event);
    const requestBody = JSON.parse(event.body);
    return await DynamoDbCRUDHelpers.modifyProduct(requestBody.productId, requestBody.updateKey, requestBody.updateValue);
};