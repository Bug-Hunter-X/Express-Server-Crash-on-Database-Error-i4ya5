# Express Server Crash on Database Error

This repository demonstrates a common error in Express.js applications where the server crashes without proper error handling when encountering issues with databases or other external resources.

## Bug

The provided `bug.js` file showcases an Express.js server that lacks robust error handling.  If the database or an external service becomes unavailable, the server will crash. This is because it does not handle asynchronous operations appropriately and fails to provide a graceful way to recover or inform the user of the error.

## Solution

The `bugSolution.js` file provides an improved version with error handling implemented using async/await and a centralized error handler middleware.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install the necessary packages.
4. Run `node bug.js` and observe the crash, for example by stopping the database.
5. Run `node bugSolution.js` to see the improved error handling.