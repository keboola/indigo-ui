const fs = require('fs');

const revision = process.env.INDIGO_UI_REVISON;
const s3basePath = 'https://assets-cdn.keboola.com/indigo-ui/' + revision + '/';

const manifest = {
  name: 'indigo-ui',
  version: revision,
  basePath: s3basePath,
  scripts: [],
  styles: [s3basePath + 'css/indigo.css']
};

console.log(manifest);

fs.writeFile(
  './revision/' + revision + '/manifest.json',
  JSON.stringify(manifest, null, '  '),
  function(err) {
    if (err) {
      throw err;
    }
  }
);
