module.exports = bundler => {
  bundler.addAssetType('tsx', require.resolve('./prettier-typescript'));
  bundler.addAssetType('ts', require.resolve('./prettier-typescript'));
  bundler.addAssetType('jsx', require.resolve('./prettier-typescript'));
  bundler.addAssetType('js', require.resolve('./prettier-typescript'));
  bundler.addAssetType('scss', require.resolve('./prettier-sass'));
};
