// At the top of test/index.test.js
const test = require('firebase-functions-test')({
    databaseURL: 'https://curselo.firebaseio.com',
    storageBucket: 'curselo.appspot.com',
    projectId: 'curselo',
  }, '../curselo-0c232d003939.json');