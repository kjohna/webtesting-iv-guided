# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser

node differences:
window => global

in package.json: "test": "cross-env DB_ENV=testing jest --watch --verbose",
  // used to abstract away OS differences setting env variables (different between windows and macOS)

look at knexfile.js: notice that "testing" allows us to choose a different db for testing
  use as: npx knex migrate:latest --env=testing

- notice "server.listen" is NOT in server.js but index.js. this is for testing, so that when server.js is tested, the tests don't attempt to start multiple servers on the same port.

- remember to clean up after POST, PUT tests!! (or any tests for that matter!)

