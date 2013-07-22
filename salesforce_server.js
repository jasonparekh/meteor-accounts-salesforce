Accounts.oauth.registerService('salesforce');

Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on
  // localhost).
  forLoggedInUser: ['services.salesforce'],
  forOtherUsers: [
    'services.salesforce.id', 'services.salesforce.display_name'
  ]
});