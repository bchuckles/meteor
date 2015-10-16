Meteor.methods({
    // The method expects a valid IPv4 address
    'geoJsonForIp': function (symbols) {
        console.log('tradier', symbols);
        // Construct the API URL
        var apiUrl = 'https://sandbox.tradier.com/v1/markets/quotes?symbols=AAPL';// + symbol;
        var header = {
            headers: {'Accept' : 'application/json', 'Authorization' : 'Bearer ZYzIwE1G0EBjizdYKiR62yfazU00' }
        };

        // query the API
        var response = HTTP.get(apiUrl,header).data;
        return response;
    }

});


