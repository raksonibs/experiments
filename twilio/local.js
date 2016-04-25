var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzcwZTVhOWI3YTJhYjM0ZGJiNDM1N2E2ZTMzZGNjOTg0LTE0NjE1NTEwMjUiLCJpc3MiOiJTSzcwZTVhOWI3YTJhYjM0ZGJiNDM1N2E2ZTMzZGNjOTg0Iiwic3ViIjoiQUM4NjJiYjgyNjBhMzUyN2NmZmJiNGU5MmE4Y2I2Zjc1MSIsImV4cCI6MTQ2MTU1NDYyNSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoibG9jYWxob3N0IiwicnRjIjp7ImNvbmZpZ3VyYXRpb25fcHJvZmlsZV9zaWQiOiJWU2UwOTEwODZkMjBlYmUxYTE2ZjliN2E5YTIzNjYyN2YxIn19fQ.c6X3IAECOq9qliyZD1_UZqjcyabF4PqW4DK3LhS7M88";
var accessManager = Twilio.AccessManager(accessToken);
var client = Twilio.Conversations.Client(accessManager);
 
// Begin listening for invites to Twilio Video conversations.
client.listen().then(function() {
  client.on('invite', function(invite) {
    invite.accept().then(onInviteAccepted);
  });
});