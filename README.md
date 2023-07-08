<h2>AWS DynamoDB CRUD Operations with AWS Lambda Function Integration</h2>

<h4>AWS Servicecs used:</h4>
<ol>
    <li>AWS API Gateway</li>
    <li>AWS Serverless Lambda</li>
    <li>AWS DynamoDB Database</li>
    <li>Runtime: nodejs18.x</li>
</ol>

<h4>API Documentation - </h4>

<h5><u>Get All Products:</u> </h5>
<p><u>Api Details:</u> Rest API to get all products list from DynamoDB database.</p>
URL endpoint - {hostname}/{stage}/products<br />
http method - "GET"<br />
produces "application/json"
<pre>
responsebody -
{
    {
        "products": [
            {
                "inventory": "333",
                "properties": {
                    "category": "Electronic Gadget",
                    "connectionType": "Bluetooth"
                },
                "price": 451,
                "productId": "10011",
                "color": "brown",
                "productName": "Tronz Speaker Bar"
            },
            {
                "inventory": "591",
                "properties": {
                    "category": "Electronic Gadget",
                    "connectionType": "Bluetooth"
                },
                "price": 452,
                "color": "purple",
                "productId": "10003",
                "productName": "Tronz Smart Watch"
            }
        ],
        "count": 11
    }
}
</pre>

<h5><u>Get Product By Primary Key Id:</u> </h5>
<p><u>Api Details:</u> Rest API to get a product by Primary Key from DynamoDB database.</p>
URL endpoint - {hostname}/{stage}/products/getproductbyid?productId={IdValue}<br />
http method - "GET"<br />
produces "application/json"
<pre>
responsebody -
{
    "product": {
        "inventory": "322",
        "properties": {
            "category": "Electronic Gadget",
            "connectionType": "Bluetooth"
        },
        "price": 467,
        "productId": "10010",
        "color": "grey",
        "productName": "Tronz Car Audio"
    }
}
</pre>

<h5><u>Add a new product:</u> </h5>
<p><u>Api Details:</u> Add a new product item to the DynamoDB database table.</p>
URL endpoint - {hostname}/{stage}/products/addproduct<br />
http method - "POST"<br />
produces "application/json"
<pre>
requestbody -
{
    "productId": "10010",
    "price": 467,
    "color": "grey",
    "productName": "Tronz Car Audio",
    "inventory": "322",
    "properties": {
        "category": "Electronic Gadget",
        "connectionType": "Bluetooth"
    }
}
responsebody -
{
    "Operation": "SAVE",
    "Message": "SUCCESS",
    "Item": {
        "productId": "10010",
        "price": 467,
        "color": "grey",
        "productName": "Tronz Car Audio",
        "inventory": "322",
        "properties": {
            "category": "Electronic Gadget",
            "connectionType": "Bluetooth"
        }
    }
}
</pre>

<h5><u>Update/Modify a product item:</u> </h5>
<p><u>Api Details:</u> Update/modify any attribute of a product item in the DynamoDB database table.</p>
URL endpoint - {hostname}/{stage}/products/updateproduct<br />
http method - "PUT"<br />
produces "application/json"
<pre>
<b>Example - 1</b>
requestbody -
{
    "productId": "10010",
    "updateKey": "price",
    "updateValue": 342
}
responsebody -
{
    "Attributes": {
        "price": 342
    }
}
<b>Example - 2</b>
requestbody -
{
    "productId": "10010",
    "updateKey": "color",
    "updateValue": "black"
}
responsebody -
{
    "Attributes": {
        "color": "black"
    }
}
</pre>

<h5><u>Delete a Product By Primary Key Id:</u> </h5>
<p><u>Api Details:</u> Delete a Product Item By Primary Key Id from the DynamoDB database table.</p>
URL endpoint - {hostname}/{stage}/products/deleteproductbyid<br />
http method - "DELETE"<br />
produces "text"
<pre>
requestbody -
{
    "productId": "10010"
}
responsebody -
"Item deleted successfully!"
</pre>