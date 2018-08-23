const TypeScriptAsset = require('parcel-bundler/src/assets/TypeScriptAsset');
const { prettifyFile } = require('./prettify')

class PrettierAsset extends TypeScriptAsset {
  constructor(...rest) {
    super(...rest);
    prettifyFile(this.name);
  }
}

module.exports = PrettierAsset;
