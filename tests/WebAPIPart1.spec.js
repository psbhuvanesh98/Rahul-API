const {test, expect, request} = require('@playwright/test');
const { json } = require('stream/consumers');
const loginPayload = {userEmail:"rahul@setmore.com",userPassword:"Helloworld12*"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6581ca979fd99c85e8ee7faf"}]};
let token;
let orderId;
test('apitest-Post request, get access token & print in console',async()=>
{
const apiContext = await request.newContext();
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
{
    data:loginPayload
} ) //200,201
expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson = await loginResponse.json();
const token = loginResponseJson.token;
console.log(token);
//

const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data:orderPayload,
        headers:{
            'Authorization':token,
            'Content-Type': 'application/json'
        }

    })
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
    console.log(orderId);
});






















