Package.describe({
  summary: "Accounts service for Salesforce accounts",
  version: "0.0.3",
  git: "https://github.com/jasonparekh/meteor-accounts-salesforce.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('saleswise:salesforce@0.0.3', ['client', 'server']);

  api.add_files(['salesforce_login_button.css'], 'client');

  api.add_files('salesforce_common.js', ['client', 'server']);
  api.add_files('salesforce_server.js', 'server');
  api.add_files('salesforce_client.js', 'client');
});
