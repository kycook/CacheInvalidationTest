CacheInvalidationTester
=======================

1. Run the server with Node.js:
```bash
node server.js
```
2. Navigate to http://127.0.0.1:1337
3. Click the "Make POST request" button multiple times

A POST request will be made to the server and the JSON response will be shown on the page. Each time the request is made, a counter is incremented on the server and a new count value is returned.

If the same request is returned by two simultaneous requests, an error is shown on the page indicating that the request was cached.
