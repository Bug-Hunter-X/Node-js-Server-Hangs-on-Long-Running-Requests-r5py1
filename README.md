# Node.js Server Hangs on Long-Running Requests

This repository demonstrates a common issue in Node.js where a server can hang when processing long-running requests.  The problem arises because Node.js is single-threaded and a long-running operation blocks the event loop, preventing other requests from being processed.

The `server.js` file shows the buggy code. The `serverSolution.js` demonstrates how to fix this using asynchronous operations with promises.  This ensures that the server remains responsive even during long-running tasks. 