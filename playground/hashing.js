const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abd!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//       console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$TQRweOHOyZ4cVsvOO65nYuLAY4FHiDehHK.IapRRhDjZFvk2ldhJK';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'abc123')
// console.log(token);
//
// var decoded = jwt.verify(token, 'abc123');
// console.log('decoded', decoded);

// var message ='I am a number not a name';
// var hash = SHA256(message).toString();
//
// console.log('message:', message);
// console.log('hash:', hash);
// console.log(hash.length);

// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString()
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed, don\'t trust it');
// }
