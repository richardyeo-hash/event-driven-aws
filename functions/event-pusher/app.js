var AWS = require('aws-sdk')
var eventbridge = new AWS.EventBridge();
/**
 * Sample Lambda function which mocks the operation of buying a random number of shares for a stock.
 * For demonstration purposes, this Lambda function does not actually perform any  actual transactions. It simply returns a mocked result.
 * 
 * @param {Object} event - Input event to the Lambda function
 * @param {Object} context - Lambda Context runtime methods and attributes
 *
 * @returns {Object} object - Object containing details of the stock buying transaction
 * 
 */
exports.lambdaHandler = async(event, context) => {
    // Get the price of the stock provided as input
    var AWS = require('aws-sdk')
    var eventbridge = new AWS.EventBridge();
    var params = {
        Limit: 5,
        NamePrefix: 'STRING_VALUE',
        NextToken: 'STRING_VALUE'
    };
    var output = await eventbridge.listEventBuses(params, function(err, data) {
        if (err)(console.log(err)); // an error occurred
        else {
            // successful response
            console.log(data);
            return data;
        }
    }).promise();
    console.log(output);
    context.succeed(output);
};
