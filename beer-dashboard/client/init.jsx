// This code is executed on the client only
/**Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});


Meteor.startup(function() {
    React.render(<App />,  document.body);
    Meteor.http.call("POST",  "url",
        {data:{"name" : "def"},headers:{"content-type":"application/json"}}, function      (error,result) {
            console.log(result);
        });
});**/