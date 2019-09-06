const fs = require('fs'); // pull in the filesystem module

const img = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(img);
  response.end();
};

module.exports.img = img;
module.exports.getImage = getImage;
