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
        Entries: [ /* required */ {
                Detail: JSON.stringify(event),
                DetailType: 'firstEventSchema',
                EventBusName: 'default',
                Resources: [
                    'Lambda'
                ],
                Source: 'StockTrade'
            },
            /* more items */
        ]
    };
    var output = await eventbridge.putEvents(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    }).promise();
    context.succeed(output);
};
