// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const baseConfig = getDefaultConfig(__dirname);

const { transformer, resolver } = baseConfig;

baseConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

baseConfig.resolver = {
  ...resolver,
  assetExts: [
    ...resolver.assetExts.filter((ext) => ext !== "svg"),
    "glb",
    "gltf",
    "png",
    "jpg",
    "ttf",
  ],
  sourceExts: [
    ...resolver.sourceExts,
    "svg",
    "js",
    "jsx",
    "json",
    "ts",
    "tsx",
    "cjs",
    "mjs",
  ],
};

module.exports = wrapWithReanimatedMetroConfig(baseConfig);
