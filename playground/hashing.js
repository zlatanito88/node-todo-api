const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 4
};

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // man in the middle

// // token.data = 1;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// // token check

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }

// *********************************************************************************
// *********** this can be done quickly with the library jsonwebtoken **************

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);