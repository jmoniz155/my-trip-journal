const net = require('follow-redirects').https;
const fs = require('fs');
const auth_key = Buffer.from('access_key:baea1f6cd76db85867f372daceeca7c7').toString('base64');


const options = {
  'method': 'GET',
  'hostname': 'api.roadgoat.com',
  'port': 80,
  'path': '/api/v2/destinations/auto_complete?q=barcelona',
  'headers': {
    'Authorization': `Basic ${auth_key}`
  },
  'maxRedirects': 20
};

const req = net.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    const body = Buffer.concat(chunk);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();