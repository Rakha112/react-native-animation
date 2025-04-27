// metro.config.js
const {getDefaultConfig} = require('expo/metro-config');
const {mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },
  resolver: {
    assetExts: [
      ...assetExts.filter(ext => ext !== 'svg'),
      'glb',
      'gltf',
      'png',
      'jpg',
    ],
    sourceExts: [...sourceExts, 'svg', 'js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
  },
};

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(defaultConfig, config),
);
