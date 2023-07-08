'use strict';

module.exports.deleteproduct = async (event) => {
    const DynamoDbCRUDHelpers = require('../../helpers/DynamoDbCRUDHelpers.js');
    console.log("Requst event: ", event);
    let productId = JSON.parse(event.body).productId;
    return await DynamoDbCRUDHelpers.deleteProduct(productId);
};