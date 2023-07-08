'use strict';

module.exports.getproductbyid = async (event) => {
    const DynamoDbCRUDHelpers = require('../../helpers/DynamoDbCRUDHelpers.js');
    console.log("Requst event: ", event);
    const productId = event.queryStringParameters.productId;
    return await DynamoDbCRUDHelpers.getProduct(productId);
};