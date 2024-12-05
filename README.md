# React Native: Unhandled error accessing uninitialized state variable

This repository demonstrates a common error in React Native applications where a state variable or prop is accessed before it has been fully initialized. This typically occurs when dealing with asynchronous operations like fetching data from an API.

## Problem

The provided `bug.js` file shows an example where a component attempts to render before the data fetched from the API is available.  This results in an error because the application tries to access `data.name` while `data` is still `null` or `undefined`.

## Solution

The `bugSolution.js` file demonstrates a solution using optional chaining (`?.`) and nullish coalescing (`??`) operators to safely handle potentially null or undefined values.  This avoids crashes and ensures a smoother user experience.