'use strict';

const AWS = require("aws-sdk");

AWS.config.update({
    region: process.env.REGION
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamoTableName = process.env.DYNAMODB_TABLE;

const deleteProduct = async (productId) => {
    let params = {
        TableName: dynamoTableName,
        Key: {
            'productId': productId
        },
        ReturnValues: "NONE"
    };
    return await dynamodb.delete(params).promise().then(() => {
        return buildResponse(202, "Item deleted successfully!");
    }, (error) => {
        return buildResponse(404, { message: "Product not deleted! Something went wrong.", stackTrace: error });
    });
}

const modifyProduct = async (productId, updateKey, updateValue) => {
    let params = {
        TableName: dynamoTableName,
        Key: {
            'productId': productId
        },
        UpdateExpression: "SET " + updateKey + " = :value1",
        ExpressionAttributeValues: {
            ":value1": updateValue
        },
        ReturnValues: "UPDATED_NEW"
    };

    return await dynamodb.update(params).promise().then((response) => {
        return buildResponse(200, response);
    }, (error) => {
        return buildResponse(404, { message: "Product not updated! Something went wrong.", stackTrace: error });
    });
}

const getProducts = async () => {
    const params = {
        TableName: dynamoTableName,
        ConsistentRead: true
    };
    return await dynamodb.scan(params).promise().then((response) => {
        return buildResponse(200, { products: response.Items, count: response.Count });
    }, (error) => {
        return buildResponse(404, { message: "Products not found! Something went wrong.", stackTrace: error });
    });
}

const getProduct = async (productId) => {
    const params = {
        TableName: dynamoTableName,
        Key: {
            'productId': productId
        }
    };
    return await dynamodb.get(params).promise().then((response) => {
        return buildResponse(200, { product: response.Item });
    }, (error) => {
        return buildResponse(404, { message: "Product not found! Something went wrong.", stackTrace: error });
    });
}

const saveProduct = async (requestBody) => {
    const params = {
        TableName: dynamoTableName,
        Item: requestBody
    };
    return await dynamodb.put(params).promise().then(() => {
        const body = {
            Operation: 'SAVE',
            Message: 'SUCCESS',
            Item: requestBody
        };
        return buildResponse(201, body);
    }, (error) => {
        return buildResponse(404, { message: "Not saved! Something went wrong.", stackTrace: error });
    });
}

const buildResponse = (statusCode, body) => {
    return {
        isBase64Encoded: false,
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
}

module.exports = {
    deleteProduct: deleteProduct,
    modifyProduct: modifyProduct,
    getProducts: getProducts,
    getProduct: getProduct,
    saveProduct: saveProduct,
    buildResponse: buildResponse
};