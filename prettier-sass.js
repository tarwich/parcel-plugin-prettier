const SASSAsset = require('parcel-bundler/src/assets/SASSAsset');
const { prettifyFile } = require('./prettify')

class PrettierAsset extends SASSAsset {
  constructor(...rest) {
    super(...rest);
    prettifyFile(this.name);
  }
}

module.exports = PrettierAsset;
