const JavaScriptAsset = require('parcel-bundler/src/assets/JSAsset');
const { prettifyFile } = require('./prettify')

class PrettierAsset extends JavaScriptAsset {
  constructor(...rest) {
    super(...rest);
    prettifyFile(this.name);
  }
}

module.exports = PrettierAsset;
