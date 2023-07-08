'use strict';

module.exports.getproducts = async (event) => {
    const DynamoDbCRUDHelpers = require('../../helpers/DynamoDbCRUDHelpers.js');
    console.log("Requst event: ", event);
    return await DynamoDbCRUDHelpers.getProducts();
};