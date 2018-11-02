module.exports = bundler => {
  bundler.addAssetType('tsx', require.resolve('./prettier-typescript'));
  bundler.addAssetType('ts', require.resolve('./prettier-typescript'));
  bundler.addAssetType('js', require.resolve('./prettier-javascript'));
  bundler.addAssetType('scss', require.resolve('./prettier-sass'));
};
