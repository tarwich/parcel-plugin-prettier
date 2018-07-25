module.exports = bundler => {
  bundler.addAssetType('tsx', require.resolve('./prettier-typescript'));
  bundler.addAssetType('ts', require.resolve('./prettier-typescript'));
  bundler.addAssetType('scss', require.resolve('./prettier-sass'));
};
